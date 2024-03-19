import { nanoid } from "nanoid";
import { getImageUrl } from ".";

// social Media Platforms
export const socialMediaContent = {

    twitter: {
        name: "Twitter",
        image: getImageUrl("social/twitter-X.svg"),
        description:
            "Twitter is a social media platform for creating, sharing, and discovering short posts.",
        videoUrl: "https://www.youtube.com/embed/TzFvB35n8To",
        features: [
            {
                title: "Grow your reach",
                description:
                    "Advertise and sell your products directly through your Facebook page and reach billions of potential customers.",
            },
            {
                title: "Increase your revenue",
                description:
                    "Merchants see an average increase of 15% in revenue when selling on Facebook.",
            },
            {
                title: "Easy checkout",
                description:
                    "With Facebook Shop, your customers will be able to easily browse products on mobile and checkout on any device.",
            },
        ],
        status: "installed",
        backgroundColor: ["#1DA1F2", "#14171A"],
        posters: {
            poster_1: getImageUrl("posters/Designer_3.jpeg"),
            poster_2: getImageUrl("posters/Designer_4.jpeg"),
        },

        mostPopular: true,
    },
    facebook: {
        name: "Facebook",
        image: getImageUrl("social/facebook.svg"),
        description:
            "Facebook is a social networking platform that allows users to connect with friends and family, share photos, and engage in various activities.",
        videoUrl: "https://www.youtube.com/embed/YjRKXw7u0tM",
        features: [
            {
                title: "Grow your reach",
                description:
                    "Advertise and sell your products directly through your Facebook page and reach billions of potential customers.",
            },
            {
                title: "Increase your revenue",
                description:
                    "Merchants see an average increase of 15% in revenue when selling on Facebook.",
            },
            {
                title: "Easy checkout",
                description:
                    "With Facebook Shop, your customers will be able to easily browse products on mobile and checkout on any device.",
            },
        ],
        status: "free",
        backgroundColor: ["#0D53FC", "#55C397"],
        posters: {
            poster_1: getImageUrl("posters/Designer_1.jpeg"),
            poster_2: getImageUrl("posters/Designer_2.jpeg"),
        },
        mostPopular: true,
    },
    mailchimp: {
        name: "Mailchimp",
        image: getImageUrl("social/facebook.svg"),
        description:
            "Mailchimp is an all-in-one marketing platform that helps businesses manage their email campaigns, build landing pages, and analyze their marketing efforts.",
        videoUrl: "https://www.youtube.com/embed/JlxFXN3POZw",
        features: [
            {
                title: "Grow and Measure Sales",
                description:
                    "Measure the impact of your ads, build retargeting audiences, and optimize campaigns to drive purchases with the Snap Pixel.",
            },
            {
                title: "Showcase Your Products",
                description:
                    "Easily sync your Shopify products to your Snapchat Catalog to create engaging, made-for-commerce product ads.",
            },
            {
                title: "Personalize Campaigns",
                description:
                    "Reach the right customers at the right time with Dynamic Ads; get set up from either Snapchat’s Ads Manager or Shopify’s Marketing tab.",
            },
        ],
        status: "free",
        backgroundColor: ["#FFE01B", "#FF4C4C"],
    },
    mostPopular: false,
};


// Most popular Apps
export const mostPopularApps = [
    {
        id: nanoid(),
        image: getImageUrl("social/google.svg"),
        name: "Google",
        url: "/apps/google",
        status: "available",
        description:
            "The Google channel makes it easy for you to reach the millions of shoppers that use Google to find the products they need.",
    },
    {
        id: nanoid(),
        image: getImageUrl("social/twitter-X.svg"),
        name: "Twitter",
        url: "/apps/twitter",
        status: "available",
        description:
            "Connect with Twitter to launch an ad campaign to show your products in front of potential customers.",
    },
    {
        id: nanoid(),
        image: getImageUrl("social/facebook.svg"),
        name: "Facebook & Instagram",
        url: "/apps/facebook",
        status: "installed",
        description:
            "Connect with Facebook, Instagram Shop and launch an ad campaign to show your products in front of potential customers. ",
    },
];


// Social media Accounts
export const socialApps = [
    {
        id: nanoid(),
        name: "Facebook",
        description: "Connect with Facebook to get to millions of customers",
        image: getImageUrl("social/facebook.svg"),
        status: "installed",
        url: "/apps/facebook",
    },
    {
        id: nanoid(),
        name: "Google",
        description: "Connect with Google to get to millions of customers",
        image: getImageUrl("social/google.svg"),
        status: "available",
        url: "/apps/google",
    },
    {
        id: nanoid(),
        name: "Gmail",
        description: "Connect with Gmail to get to millions of customers",
        image: getImageUrl("social/gmail.svg"),
        status: "installed",
        url: "/apps/gmail",
    },
    {
        id: nanoid(),
        name: "TikTok",
        description: "Connect with TikTok to get to millions of customers",
        image: getImageUrl("social/tiktok.svg"),
        status: "available",
        url: "/apps/tiktok",
    },
    {
        id: nanoid(),
        name: "Snapchat",
        description: "Connect with Snapchat to get to millions of customers",
        image: getImageUrl("social/snapchat.svg"),
        status: "installed",
        url: "/apps/snapchat",
    },
    {
        id: nanoid(),
        name: "WhatsApp",
        description: "Connect with WhatsApp to get to millions of customers",
        image: getImageUrl("social/whatsapp.svg"),
        status: "available",
        url: "/apps/whatsapp",
    },
    {
        id: nanoid(),
        name: "Telegram",
        description: "Connect with Telegram to get to millions of customers",
        image: getImageUrl("social/telegram.svg"),
        status: "installed",
        url: "/apps/telegram",
    },
    {
        id: nanoid(),
        name: "Twitter",
        description: "Connect with Twitter to get to millions of customers",
        image: getImageUrl("social/twitter-X.svg"),
        status: "available",
        url: "/apps/twitter",
    },
];