declare module "*.jpg";
declare module "*.png";
declare module "*.PNG";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.hdr";

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.gltf" {
  const content: string;
  export default content;
}
declare module "*.gltf" {
  const content: Record<string, unknown>; // Or a glTF interface if you have/need one
  export default content;
}
