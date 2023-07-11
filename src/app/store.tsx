import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./HomeSlice";
import NavbarSlice from "./NavbarSlice";
import FooterSlice from "./FooterSlice";

export const store = configureStore({
  reducer: {
    homeData: HomeSlice,
    navbarData: NavbarSlice,
    footerData: FooterSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
