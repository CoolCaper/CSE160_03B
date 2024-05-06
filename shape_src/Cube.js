//draw cube class

class Cube {
    constructor(color=[1.0,1.0,1.0,1.0],tex=-1){
      this.type = 'cube';
      this.color = color;
    //   this.position = position;
      this.vertices = this.initVertexArray();
      this.matrix = new Matrix4();
      this.drawMatrix = new Matrix4();
      this.textureNum=tex;
      this.u_whichTexture
     // var u_whichTexture;
    }

    // In initVertexArray, specify the texture coordinates (draw it out)
    // Modify the shader to use a_UV
    // Modify lines 114-121 with the correct strides and offsets
    // Modify line 80 to get the correct n


    initVertexArray(){
        let vertices = [
            // Positions            // UV Coordinates
             // Back face
            -0.5, -0.5, -0.5,        0,0,
             0.5, -0.5, -0.5,        1,0,
             0.5,  0.5, -0.5,        1,1,
             0.5,  0.5, -0.5,        1,1,
            -0.5,  0.5, -0.5,        0,1,
            -0.5, -0.5, -0.5,        0,0,

            // Front face
            -0.5, -0.5,  0.5,           0,0,
             0.5, -0.5,  0.5,           1,0,
             0.5,  0.5,  0.5,           1,1,
             0.5,  0.5,  0.5,           1,1,
            -0.5,  0.5,  0.5,           0,1,
            -0.5, -0.5,  0.5,           0,0,

            // Left Face
            -0.5,  0.5,  0.5,           0,0,
            -0.5,  0.5, -0.5,           1,0,
            -0.5, -0.5, -0.5,           1,1,
            -0.5, -0.5, -0.5,           1,1,
            -0.5, -0.5,  0.5,           0,1,
            -0.5,  0.5,  0.5,           0,0,

            //  Right Face
             0.5,  0.5,  0.5,           0,0,
             0.5,  0.5, -0.5,           1,0,
             0.5, -0.5, -0.5,           1,1,
             0.5, -0.5, -0.5,           1,1,
             0.5, -0.5,  0.5,           0,1,
             0.5,  0.5,  0.5,           0,0,

             // Bottom Face
            -0.5, -0.5, -0.5,            0,0,
             0.5, -0.5, -0.5,            1,0,
             0.5, -0.5,  0.5,            1,1,
             0.5, -0.5,  0.5,            1,1,
            -0.5, -0.5,  0.5,            0,1,
            -0.5, -0.5, -0.5,            0,0,

            // Front Face
            -0.5,  0.5, -0.5,           0,0,
             0.5,  0.5, -0.5,           1,0,
             0.5,  0.5,  0.5,           1,1,
             0.5,  0.5,  0.5,           1,1,
            -0.5,  0.5,  0.5,           0,1,
            -0.5,  0.5, -0.5,           0,0,
        ];
        
        let old_verts = [
            -0.5, -0.5, -0.5,        
             0.5, -0.5, -0.5,  
             0.5,  0.5, -0.5,  
             0.5,  0.5, -0.5,
            -0.5,  0.5, -0.5,
            -0.5, -0.5, -0.5, 

            -0.5, -0.5,  0.5,
             0.5, -0.5,  0.5,
             0.5,  0.5,  0.5,
             0.5,  0.5,  0.5,
            -0.5,  0.5,  0.5,
            -0.5, -0.5,  0.5,

            -0.5,  0.5,  0.5,
            -0.5,  0.5, -0.5,
            -0.5, -0.5, -0.5, 
            -0.5, -0.5, -0.5, 
            -0.5, -0.5,  0.5,
            -0.5,  0.5,  0.5,

             0.5,  0.5,  0.5,
             0.5,  0.5, -0.5,
             0.5, -0.5, -0.5,
             0.5, -0.5, -0.5,
             0.5, -0.5,  0.5,
             0.5,  0.5,  0.5,

            -0.5, -0.5, -0.5, 
             0.5, -0.5, -0.5,
             0.5, -0.5,  0.5,
             0.5, -0.5,  0.5,
            -0.5, -0.5,  0.5,
            -0.5, -0.5, -0.5, 

            -0.5,  0.5, -0.5,
             0.5,  0.5, -0.5,
             0.5,  0.5,  0.5,
             0.5,  0.5,  0.5,
            -0.5,  0.5,  0.5,
            -0.5,  0.5, -0.5];
        return vertices;
    }
    getNormalVertices() {
        
        let old_verts = [
            -0.5, -0.5, -0.5,        
             0.5, -0.5, -0.5,  
             0.5,  0.5, -0.5,  
             0.5,  0.5, -0.5,
            -0.5,  0.5, -0.5,
            -0.5, -0.5, -0.5, 

            -0.5, -0.5,  0.5,
             0.5, -0.5,  0.5,
             0.5,  0.5,  0.5,
             0.5,  0.5,  0.5,
            -0.5,  0.5,  0.5,
            -0.5, -0.5,  0.5,

            -0.5,  0.5,  0.5,
            -0.5,  0.5, -0.5,
            -0.5, -0.5, -0.5, 
            -0.5, -0.5, -0.5, 
            -0.5, -0.5,  0.5,
            -0.5,  0.5,  0.5,

             0.5,  0.5,  0.5,
             0.5,  0.5, -0.5,
             0.5, -0.5, -0.5,
             0.5, -0.5, -0.5,
             0.5, -0.5,  0.5,
             0.5,  0.5,  0.5,

            -0.5, -0.5, -0.5, 
             0.5, -0.5, -0.5,
             0.5, -0.5,  0.5,
             0.5, -0.5,  0.5,
            -0.5, -0.5,  0.5,
            -0.5, -0.5, -0.5, 

            -0.5,  0.5, -0.5,
             0.5,  0.5, -0.5,
             0.5,  0.5,  0.5,
             0.5,  0.5,  0.5,
            -0.5,  0.5,  0.5,
            -0.5,  0.5, -0.5];
        return old_verts

    }




    identity() { //resets to identity matrix
        this.matrix.elements = new Float32Array([
            1,0,0,0, 
            0,1,0,0, 
            0,0,1,0, 
            0,0,0,1]);
    }

    drawTriangleIn3D(vertices) {
        //var verts = this.getNormalVertices()
        vertices = new Float32Array(vertices);
        var n = vertices.length / 5;
        // Create a buffer object
        var vertexBuffer = gl.createBuffer();
        if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
        }

        // var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
        // if (a_Position < 0) {
        //    console.log('Failed to get the storage location of a_Position');
        //    return -1;
        //  }
        
        // var a_UV = gl.getAttribLocation(gl.program, 'a_UV');
        // if (a_UV < 0) {
        //     console.log('Failed to get the storage location of a_UV');
        //     return -1;
        // }

        var rgba = this.color
        var u_whichTexture;
        //gl.uniform1i(u_whichTexture, this.textureNum);
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

        // Pass the size of a point to u_Size variable

        // Bind the buffer object to target
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

        // Write date into the buffer object
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.DYNAMIC_DRAW);

        let FSIZE = vertices.BYTES_PER_ELEMENT;

        // Assign the buffer object to a_Position variable
        // -0.5, -0.5, -0.5,    0.0, 1.0, // First Vertex
        // -0.5, -0.5, -0.5,    1.0, 1.0, // Second Vertex
        gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, FSIZE * 5, 0);
        // Enable the assignment to a_Position variable
        gl.enableVertexAttribArray(a_Position);
        
        // Assign the buffer object to a_UV variable
        gl.vertexAttribPointer(a_UV, 2, gl.FLOAT, false, FSIZE * 5, FSIZE * 3);
        // Enable the assignment to a_UV variable
        gl.enableVertexAttribArray(a_UV);


        gl.drawArrays(gl.TRIANGLES, 0, n);
    
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
    }

    drawTriangle3DUV(vertices, uv) {
        var n = vertices.length / 3;
        // Create a buffer object
        var vertexBuffer = gl.createBuffer();
        if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
        }

        var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
        if (a_Position < 0) {
           console.log('Failed to get the storage location of a_Position');
           return -1;
         }
        
        var rgba = this.color
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

        // Pass the size of a point to u_Size variable

        // Bind the buffer object to target
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

        // Write date into the buffer object
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);

        // Assign the buffer object to a_Position variable
        gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
    
        // Enable the assignment to a_Position variable
        gl.enableVertexAttribArray(a_Position);
        

        //UV
        
        var UVBuffer = gl.createBuffer();
        if (!UVBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
        }
        
        // Bind the buffer object to target
        gl.bindBuffer(gl.ARRAY_BUFFER, UVBuffer);

        // Write date into the buffer object
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uv), gl.DYNAMIC_DRAW);

        // Assign the buffer object to a_Position variable
        gl.vertexAttribPointer(a_UV, 2, gl.FLOAT, false, 0, 0);
    
        // Enable the assignment to a_Position variable
        gl.enableVertexAttribArray(a_UV);

        gl.drawArrays(gl.TRIANGLES, 0, n);
    
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
    }

    drawNormalTriangleIn3D() {
        
        var verts = this.initVertexArray()
        var vertices = new Float32Array(verts)
        var n = vertices.length / 3;
        // Create a buffer object
        var vertexBuffer = gl.createBuffer();
        if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
        }

        var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
        if (a_Position < 0) {
           console.log('Failed to get the storage location of a_Position');
           return -1;
         }
        
        var rgba = this.color
        console.log(rgba)
        //gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

        // Pass the size of a point to u_Size variable

        // Bind the buffer object to target
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

        // Write date into the buffer object
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);

        // Assign the buffer object to a_Position variable
        gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
    
        // Enable the assignment to a_Position variable
        gl.enableVertexAttribArray(a_Position);
        
        gl.drawArrays(gl.TRIANGLES, 0, n);
    
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
    }

    render() {        
        if (this.textureNum == -2) {
            this.drawNormalTriangleIn3D(this.vertices);
        } else {
            this.drawTriangleIn3D(this.vertices);
        }
    }

}
  