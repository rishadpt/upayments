export interface ProductTypes {
    name: string,
    price: number,
    image: string,
    id: string, 
}

export interface AvatarTypes {
    avatar: string,
    style?: string,
}

export interface ServiceProps {
    getProducts: () => Promise<any>,
    getProductbyId: (id: string) => Promise<any>,
    getCategory: () => Promise<any>,
    getProductbyCategory: (id: string) => Promise<any>,
    
}