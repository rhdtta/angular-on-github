

export interface obj_subcategories {
    image: string,
    name: string
}

export interface obj_categories {
    name: string,
    image: string,
    subcategories: Array<obj_subcategories>
}

export interface obj_branch {
    branch_id: string,
    categories: Array<obj_categories>,
}


export interface obj {
    branches: Array<obj_branch>,
    dealers_id: string,
    name: string,
    opco: string
}