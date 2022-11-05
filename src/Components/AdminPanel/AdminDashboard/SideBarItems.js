import MenuIcon from "@material-ui/icons/Menu";
import { HiViewGridAdd } from "react-icons/hi";
import { FaNotesMedical ,FaMoneyCheckAlt ,IoListOutline} from "react-icons/fa";
import { RiGitRepositoryFill } from "react-icons/ri";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {AiFillPlusCircle } from "react-icons/ai"
// import {AddCircleIcon} from '@mui/icons-material/AddCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import BalanceIcon from '@mui/icons-material/Balance';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
export const ServiceAccordtion=[
    {
        id:1,
        title:'List  Products',
        path: 'allPr',
        icon: <FormatListBulletedIcon/>
    },
    {
        id:2,
        title:'Add Products',
        path:'addProduct',
        icon: <AddCircleIcon />
    },
    {
        id:3,
        title:'Print Labels',
        path:'viewLists',
        icon: <AiFillPlusCircle />
    },
    {
        id:4,
        title:'Variations',
        path:'viewLists',
        icon: <PanoramaFishEyeIcon   />
    },
    {
        id:5,
        title:'Import Products',
        path:'viewLists',
        icon: <FileDownloadIcon />
    },
    {
        id:6,
        title:'Import Opening Stocks',
        path:'viewLists',
        icon: <FileDownloadIcon />
    },
    {
        id:7,
        title:'Selling Price Group',
        path:'viewLists',
        icon: <PanoramaFishEyeIcon />
    },
    {
        id:8,
        title:'Units',
        path:'viewLists',
        icon: <BalanceOutlinedIcon />
    },
    {
        id:9,
        title:'Categories',
        path:'viewLists',
        icon: <SellOutlinedIcon />
    },
    {
        id:10,
        title:'Brands',
        path:'viewLists',
        icon: <DiamondOutlinedIcon />
    },

    



]



// export const LeftBarData=[
//     {
//         id:1,
//         title:'Services',
//         path:'service',
//         icon: <HiViewGridAdd/>
//     },
//     {
//         id:2,
//         title:'Students Record',
//         path:'student',
//         icon: <FaNotesMedical/>
//     }, {
//         id:3,
//         title:'Payment',
//         path:'payment',
//         icon: <FaMoneyCheckAlt />
//     }, {
//         id:4,
//         title:'Student Reports',
//         path:'reports',
//         icon: <RiGitRepositoryFill />
//     },
//     {
//         id:5,
//         title:'User Feedbacks',
//         path:'feedback',
//         icon: <RiGitRepositoryFill />
//     },

   

// ]

// export const Menus=[
//     {
//         id:1,
//         title:'Profile',
//         path:'profile',
//         icon: <MenuIcon />
//     },
// ]