import styles from './FilterableProductTable.module.css'
import SearchBar from './search-bar/SearchBar'
import ProductTable from './product-table/ProductTable'
import productList from './product-list/product-list'

export default function FilterableProductTable(){

    return(
    <div className={styles.filterableProductTableContainer}>
        <SearchBar></SearchBar>
        <ProductTable></ProductTable>
    </div>
    )
}