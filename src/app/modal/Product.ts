
export class ProductType {
    Type: string;
    Products: ProductModel[];
}
export class ProductModel {
    pid: string;
    pname: string;
    img: string[];
    description: string;
    series: string;
    specification: Spec[];
    datasheetUrl: string;
    type: string;
}
export class Spec {
    spec: string;
}
