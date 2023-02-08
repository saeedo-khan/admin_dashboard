import FavoriteIcon from "@mui/icons-material/Favorite";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import WorkIcon from "@mui/icons-material/Work";

// images
import productImg1 from "../assets/usama-akram-kP6knT7tjn4-unsplash.jpg";
import productImg2 from "../assets/usama-akram-s-gYAbQToXk-unsplash.jpg";

export const boxesData = [
    { stats: 178, title: "Save Products", boxIcon: FavoriteIcon },
    { stats: 20, title: "Stock Products", boxIcon: InventoryIcon },
    { stats: 190, title: "Sales Products", boxIcon: ShoppingBagIcon },
    { stats: 12, title: "Job Application", boxIcon: WorkIcon },
];


export const topProducts = [
    {title: "Nike shoes yellow pattern", rating: 4.5, productImg: productImg1, productPrice: 87},
    {title: "Nike shoes black pattern", rating: 4.5, productImg: productImg2, productPrice: 87},
]