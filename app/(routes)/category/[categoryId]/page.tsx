// CategoryId page is the page rendered when user requests for a specifical category info and items 

// useful functions import 
import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";

// Useful components import 
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import Filter from "@/components/product/components/filter"
import ProductCard from "@/components/ui/product/product-card";
import NoResults from "@/components/ui/no-results";
import MobileFilters from "@/components/product/components/mobile-filters";

export const revalidate = 0;

//  Creating the blueprint for the categoryId page 
interface CategoryPageProps {
    params: {
        categoryId: string
    },

    searchParams: {
        colorId: string,
        sizeId: string
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params, searchParams }) => {

    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId,
    });
    const category = await getCategory(params.categoryId);
    const sizes = await getSizes();
    const colors = await getColors();

    const billboard = {
        id: '9da5263d-e533-4202-9351-296886355c74',
        storeId: '5601a131-affb-4108-9135-38450c4918d0',
        label: 'BILLBAORD TEST',
        imageUrl: 'https://res.cloudinary.com/dvnpzsb2v/image/upload/v1710485550/so2pype57ktesvcu23mt.png',
        createdAt: '2024-03-15T06:52:41.361Z',
        updatedAt: '2024-03-15T06:52:41.361Z'
      }
   
    return (
        <div className="bg-white">
            <Container>

                <Billboard data={billboard} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={sizes} colors={colors} />
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((item : any) => (
                                    <ProductCard key={item.id} data={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CategoryPage;