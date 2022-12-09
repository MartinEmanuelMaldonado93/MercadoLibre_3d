declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}
declare module "*.jpg";
declare module "*.png";
declare module "*.PNG";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.hdr";
declare module "*.gltf" {
    const content: string;
    export default content;
  }
//  "*.scss"  
