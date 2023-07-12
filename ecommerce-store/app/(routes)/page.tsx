import getBillbaords from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

const StorePage = async () => {
    const products = await getProducts({ isFeatured: true })
    const billboards = await getBillbaords("b300d3ed-a3c5-4b84-980e-60e6291f5684")
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard
                    data={billboards}
                />
                <div className="flex flex-col lg:px-8 sm:px-6 gap-y-5 px-4">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    );
}

export default StorePage;