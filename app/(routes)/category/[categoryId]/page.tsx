// CategoryId page is the page rendered when user requests for a specifical category info and items 

import getCategory from "@/actions/get-category";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

//  Creating the blueprint for the categoryId page 
interface CategoryPageProps {
    params: {
        categoryId: string
    },

    searchparams: {

    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params, searchparams }) => {

    const category = await getCategory(params.categoryId);

    return (
        <div className="bg-white">
            <Container>
                <Billboard data={category.billboard} />
            </Container>
        </div>
    )
}

export default CategoryPage;