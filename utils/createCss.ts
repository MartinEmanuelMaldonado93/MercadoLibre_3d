/** Converts module scss  to a classic style names 
 * author: Martin Emanuel Maldonado
 */
type cssModule = {
    readonly [key: string]: string;
};

export function createCss(style: cssModule) {
    return (classesStr: string) => {
        const keys = classesStr.split(" ");
        const moduleClasses = keys.map((key) => style[key] || "");
        return moduleClasses.join(" ");
    };
};