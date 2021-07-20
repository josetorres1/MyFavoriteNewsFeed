import {
  AllPostsByPage,
  decrementPage,
  fetchPosts,
  getAmountOfPostPages,
  incrementPage,
  postSlice,
  selectAll,
  selectPage,
} from "../redux/slices";
import fetchPost from "../__mocks__/fetchPostMock";
import { posts } from "../__mocks__/postsMock";
import initialState from "../__mocks__/storeMock";
import storeMock from "../__mocks__/storeMock";
import { Dispatch } from "@reduxjs/toolkit";

describe("Test Post Reducers and State", () => {
  it("Should return initial state", () => {
    expect(postSlice.reducer(undefined, {})).toEqual(storeMock.posts);
  });
  it("Should not increment page if there are not posts", () => {
    expect(postSlice.reducer(storeMock.posts, incrementPage())).toEqual({
      ...storeMock.posts,
      page: 1,
    });
  });
  it("Should increment page if post more than 10", () => {
    expect(postSlice.reducer(posts, incrementPage())).toEqual({
      ...posts,
      page: 2,
    });
  });
  it("Should move to page 3", () => {
    expect(postSlice.reducer(storeMock.posts, selectPage({ page: 3 }))).toEqual(
      {
        ...storeMock.posts,
        page: 3,
      }
    );
  });
  it("Should not decrement page if page is equal to one", () => {
    expect(postSlice.reducer(storeMock.posts, decrementPage())).toEqual(
      storeMock.posts
    );
  });
  it("Should not decrement page if page is equal to one", () => {
    expect(postSlice.reducer({ ...posts, page: 2 }, decrementPage())).toEqual(
      posts
    );
  });
  it("Should return post of page 1", () => {
    expect(
      AllPostsByPage.resultFunc(selectAll({ posts: posts }), 1)
    ).toHaveLength(10);
  });
  it("Should return number of pages with posts", () => {
    expect(
      getAmountOfPostPages.resultFunc(selectAll({ posts: posts }))
    ).toEqual(2);
  });
});
