//screens
import {
    ListPost,
    CreatePost
} from "../views";

// contains Screens that are to be displayed, you can add a new screeen by adding :
// , {name: "", component: "" } in the SCREENS array.
export const SCREENS = [
    {
        name: "ListPosts",
        component: ListPost,
        activeIcon: "home",
        inactiveIcon: "home-outline"
    },
    {
        name: "CreatePost",
        component: CreatePost,
        activeIcon: "file-document-edit",
        inactiveIcon: "file-document-edit-outline"
    }
];