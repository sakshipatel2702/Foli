import React, { useState } from "react";

const SortBy = () => {

    const [sortBy, setSortBy] = useState("default");

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    return(
        <div>
            <label htmlFor="sort" style={{marginLeft: 30, color: "#214f3e"}}>Sort By</label>
            <br></br>
                    <select
                        id="sort"
                        value={sortBy}
                        onChange={handleSortChange}
                        style={{width: "200px", height: "40px", borderRadius: "8px", border: "1px solid #214f3e", paddingLeft: "10px", color: "#214f3e", fontSize: "16px", marginTop: 20, marginBottom: 20, marginLeft: 30,}}>
                        <option value="default">Default</option>
                        <option value="price-low-to-high">Price: Low to High</option>
                        <option value="price-high-to-low">Price: High to Low</option>
                        <option value="newest">Newest</option>
                    </select>
        </div>
    )
}

export default SortBy;