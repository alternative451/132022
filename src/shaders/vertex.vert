#version 300 es
in vec4 a_position;

void main() {

  // Set vertex position: vec4(X, Y, Z, 1.0)
  gl_Position = a_position;
  // Point size in pixels: float
  gl_PointSize = 10.0;
}
