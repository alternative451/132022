import frag from "./shaders/frag.frag"
import vertex from "./shaders/vertex.vert"
import { init } from "./lib/canvas";

const gl = init();
console.log("%SIZE%");


// Compile the vertex shader
const vs = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vs, vertex);
gl.compileShader(vs);

// Compile the fragment shader
const fs = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fs, frag);
gl.compileShader(fs);

// Create the WebGL program and use it
const program = gl.createProgram();
gl.attachShader(program, vs);
gl.attachShader(program, fs);
gl.linkProgram(program);
gl.useProgram(program);

const positionAttribute = gl.getAttribLocation(program, 'a_position');
gl.vertexAttrib4f(positionAttribute, .5, 0, 0, 1);

// Log compilation errors, if any
console.log('vertex shader:', gl.getShaderInfoLog(vs) || 'OK');
console.log('fragment shader:', gl.getShaderInfoLog(fs) || 'OK');
console.log('program:', gl.getProgramInfoLog(program) || 'OK');

// Set the clear color (black)
gl.clearColor(0.0, 0.0, 0.0, 1.0);

// Clear the canvas
gl.clear(gl.COLOR_BUFFER_BIT);

// Draw points
gl.drawArrays(
    gl.POINTS, // mode
    0,         // starting point
    1          // number of points to draw
);

let delta = Date.now()
const loop = () => {

}
