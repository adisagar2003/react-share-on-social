import React from "react";

interface IconListType {
  [key: string]: {
    title: string;
    path: JSX.Element;
    url;
    color: string;
    viewBox?: string;
  };
}

export const iconList: IconListType = {
  facebook: {
    title: "Facebook",
    path: (
      <path d="M24 12a12 12 0 10-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.6-4.7l2.6.2v3h-1.5c-1.5 0-2 .9-2 1.8V12h3.4l-.5 3.5h-2.8v8.4A12 12 0 0024 12z" />
    ),
    color: "#0076FB",
    url: (l) => `https://www.facebook.com/sharer/sharer.php?u=${l}`,
  },
  twitter: {
    title: "Twitter",
    path: (
      <path d="M24 4.6a10 10 0 01-2.9.7 5 5 0 002.2-2.7c-1 .6-2 1-3.1 1.2a5 5 0 00-8.4 4.5A14 14 0 011.6 3.2 4.8 4.8 0 001 5.6a5 5 0 002.2 4.1 4.9 4.9 0 01-2.3-.6A5 5 0 005 14a5 5 0 01-2.2 0 5 5 0 004.6 3.5 9.9 9.9 0 01-6.1 2.1H0a14 14 0 007.6 2.2c9 0 14-7.5 14-14V7A10 10 0 0024 4.6z" />
    ),
    color: "#1DA1F2",
    url: (l, t) => `https://twitter.com/intent/tweet?text=${t}&url=${l}`,
  },
  linkedin: {
    title: "LinkedIn",
    path: (
      <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z" />
    ),
    color: "#0073b1",
    url: (l, t, ti) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${l}&title=${ti}&summary=${t}`,
  }
};
