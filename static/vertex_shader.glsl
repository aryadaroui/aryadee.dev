#version 300 es

// an attribute is an input (in) to a vertex shader.
// It will receive data from a buffer
in vec2 a_position;
in vec2 a_texCoord;

 uniform mat3 u_matrix;// need to init

// Used to pass in the resolution of the canvas
uniform vec2 u_resolution;

// Used to pass the texture coordinates to the fragment shader
out vec2 v_texCoord;

// all shaders have a main function
void main() {

  // // convert the position from pixels to 0.0 to 1.0
  // vec2 zeroToOne = a_position / u_resolution;
  // // convert from 0->1 to 0->2
  // vec2 zeroToTwo = zeroToOne * 2.0;
  // // convert from 0->2 to -1->+1 (clipspace)
  // vec2 clipSpace = zeroToTwo - 1.0;
  // vec2 pos = clipSpace * vec2(1, -1);
  // // gl_Position = vec4( clipSpace * vec2(1, -1), 0, 1);
  // gl_Position = vec4(( u_matrix * vec3(pos, 1)).xy, 0, 1);


  // // Multiply the position by the matrix.
  // vec2 position = (u_matrix * vec3(a_position, 1)).xy;
  // // convert the position from pixels to 0.0 to 1.0
  // vec2 zeroToOne = position / u_resolution;
  // // convert from 0->1 to 0->2
  // vec2 zeroToTwo = zeroToOne * 2.0;
  // // convert from 0->2 to -1->+1 (clipspace)
  // vec2 clipSpace = zeroToTwo - 1.0;
  // gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);

  gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);



  // pass the texCoord to the fragment shader
  // The GPU will interpolate this value between points.
  v_texCoord =  vec2(a_texCoord.x, a_texCoord.y);
  // v_texCoord =  vec2((u_matrix * vec3(a_position, 1)).xy);
}