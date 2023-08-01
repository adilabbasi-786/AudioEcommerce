import "./Products.scss";
import Product from "./Product/Product";
import { useState } from "react";
const Products = ({ innerPage, headingText }) => {
  const [data, setData] = useState([
    {
      id: 1,
      attributes: {
        title:
          "boAt Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Driver",
        desc: "There is no better justice to your playlist & binging than Rockerz 450 boAt | DC edition. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel the power rising up in your veins as you indulge in your playlist with its 40mm dynamic drivers. Make adaptiveness your superpower just like the adaptive headband of Rockerz 450. Get ready to rule with #DCYou.",
        price: 1999,
        createdAt: "2023-07-31T07:23:54.926Z",
        updatedAt: "2023-07-31T07:23:55.854Z",
        publishedAt: "2023-07-31T07:23:55.851Z",
        img: {
          data: [
            {
              id: 11,
              attributes: {
                name: "headphone-prod-5.webp",
                alternativeText: null,
                caption: null,
                width: 600,
                height: 600,
                formats: {
                  thumbnail: {
                    name: "thumbnail_headphone-prod-5.webp",
                    hash: "thumbnail_headphone_prod_5_e55d9bd359",
                    ext: ".webp",
                    mime: "image/webp",
                    path: null,
                    width: 156,
                    height: 156,
                    size: 4.31,
                    url: "/uploads/thumbnail_headphone_prod_5_e55d9bd359.webp",
                  },
                  small: {
                    name: "small_headphone-prod-5.webp",
                    hash: "small_headphone_prod_5_e55d9bd359",
                    ext: ".webp",
                    mime: "image/webp",
                    path: null,
                    width: 500,
                    height: 500,
                    size: 20.27,
                    url: "/uploads/small_headphone_prod_5_e55d9bd359.webp",
                  },
                },
                hash: "headphone_prod_5_e55d9bd359",
                ext: ".webp",
                mime: "image/webp",
                size: 28,
                url: "/uploads/headphone_prod_5_e55d9bd359.webp",
                previewUrl: null,
                provider: "local",
                provider_metadata: null,
                createdAt: "2023-07-31T06:57:24.714Z",
                updatedAt: "2023-07-31T06:57:24.714Z",
              },
            },
          ],
        },
        categories: {
          data: [
            {
              id: 1,
              attributes: {
                title: "Headphones",
                createdAt: "2023-07-31T06:58:39.499Z",
                updatedAt: "2023-07-31T06:58:42.182Z",
                publishedAt: "2023-07-31T06:58:42.178Z",
              },
            },
          ],
        },
      },
    },
    {
      id: 2,
      attributes: {
        title: "Rockerz 550 Over Ear Bluetooth Headphone",
        desc: "boAt Rockerz 550 is an over-ear wireless headset that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive sound. The user can utilize the headset via dual connectivity in the form of Bluetooth and AUX.",
        price: 1799,
        createdAt: "2023-07-31T07:24:28.652Z",
        updatedAt: "2023-07-31T07:24:29.731Z",
        publishedAt: "2023-07-31T07:24:29.730Z",
        img: {
          data: [
            {
              id: 10,
              attributes: {
                name: "headphone-prod-6.webp",
                alternativeText: null,
                caption: null,
                width: 600,
                height: 600,
                formats: {
                  thumbnail: {
                    name: "thumbnail_headphone-prod-6.webp",
                    hash: "thumbnail_headphone_prod_6_2a6b1c93cf",
                    ext: ".webp",
                    mime: "image/webp",
                    path: null,
                    width: 156,
                    height: 156,
                    size: 5.19,
                    url: "/uploads/thumbnail_headphone_prod_6_2a6b1c93cf.webp",
                  },
                  small: {
                    name: "small_headphone-prod-6.webp",
                    hash: "small_headphone_prod_6_2a6b1c93cf",
                    ext: ".webp",
                    mime: "image/webp",
                    path: null,
                    width: 500,
                    height: 500,
                    size: 24.71,
                    url: "/uploads/small_headphone_prod_6_2a6b1c93cf.webp",
                  },
                },
                hash: "headphone_prod_6_2a6b1c93cf",
                ext: ".webp",
                mime: "image/webp",
                size: 33.06,
                url: "/uploads/headphone_prod_6_2a6b1c93cf.webp",
                previewUrl: null,
                provider: "local",
                provider_metadata: null,
                createdAt: "2023-07-31T06:57:24.623Z",
                updatedAt: "2023-07-31T06:57:24.623Z",
              },
            },
          ],
        },
        categories: {
          data: [
            {
              id: 1,
              attributes: {
                title: "Headphones",
                createdAt: "2023-07-31T06:58:39.499Z",
                updatedAt: "2023-07-31T06:58:42.182Z",
                publishedAt: "2023-07-31T06:58:42.178Z",
              },
            },
          ],
        },
      },
    },
    {
      id: 3,
      attributes: {
        title: "boAt Rockerz 518 Wireless Headphone",
        desc: "Now just stop worrying about Wires hanging from here and there. Pair with any Bluetooth device, connect and play. Dead Batteries can kill your vibe. boAt Rockerz 518 is designed to play Up to 20 hours. Don't just be loud, be loud and clear. We assure you have not heard such powerful bass and vocal clarity from a wireless comfortable headphone with Extra Comfort Ear cups. The boAt Super Bass Rockerz 518 Wireless Headphones will make your listening experience personal and for real. So, just plug it in and Plug into Nirvana.",
        price: 1599,
        createdAt: "2023-07-31T07:25:05.980Z",
        updatedAt: "2023-07-31T07:25:06.950Z",
        publishedAt: "2023-07-31T07:25:06.948Z",
        img: {
          data: [
            {
              id: 7,
              attributes: {
                name: "headphone-prod-2.webp",
                alternativeText: null,
                caption: null,
                width: 600,
                height: 600,
                formats: {
                  thumbnail: {
                    name: "thumbnail_headphone-prod-2.webp",
                    hash: "thumbnail_headphone_prod_2_d5222881cc",
                    ext: ".webp",
                    mime: "image/webp",
                    path: null,
                    width: 156,
                    height: 156,
                    size: 4.46,
                    url: "/uploads/thumbnail_headphone_prod_2_d5222881cc.webp",
                  },
                  small: {
                    name: "small_headphone-prod-2.webp",
                    hash: "small_headphone_prod_2_d5222881cc",
                    ext: ".webp",
                    mime: "image/webp",
                    path: null,
                    width: 500,
                    height: 500,
                    size: 21.45,
                    url: "/uploads/small_headphone_prod_2_d5222881cc.webp",
                  },
                },
                hash: "headphone_prod_2_d5222881cc",
                ext: ".webp",
                mime: "image/webp",
                size: 28.75,
                url: "/uploads/headphone_prod_2_d5222881cc.webp",
                previewUrl: null,
                provider: "local",
                provider_metadata: null,
                createdAt: "2023-07-31T06:57:24.443Z",
                updatedAt: "2023-07-31T06:57:24.443Z",
              },
            },
          ],
        },
        categories: {
          data: [
            {
              id: 1,
              attributes: {
                title: "Headphones",
                createdAt: "2023-07-31T06:58:39.499Z",
                updatedAt: "2023-07-31T06:58:42.182Z",
                publishedAt: "2023-07-31T06:58:42.178Z",
              },
            },
          ],
        },
      },
    },
    {
      id: 4,
      attributes: {
        title:
          'boAt Wave Neo | 1.69" HD Display, Upto 7 Days Battery Life, IP68 Sweat',
        desc: "Introducing a #NeoWay to live smart and stylish – the all-new Watch Wave Neo. Check everything that you need in a smartwatch and then get some more. Packed with a 1.69 inches screen, 550 nits brightness & 2.5D Curved Display – Watch Wave Neo will make your world better & brighter.",
        price: 3999,
        createdAt: "2023-07-31T07:25:46.564Z",
        updatedAt: "2023-07-31T07:25:47.481Z",
        publishedAt: "2023-07-31T07:25:47.478Z",
        img: {
          data: [
            {
              id: 14,
              attributes: {
                name: "speaker-prod-3.webp",
                alternativeText: null,
                caption: null,
                width: 600,
                height: 600,
                formats: {
                  thumbnail: {
                    name: "thumbnail_speaker-prod-3.webp",
                    hash: "thumbnail_speaker_prod_3_5f112b622e",
                    ext: ".webp",
                    mime: "image/webp",
                    path: null,
                    width: 156,
                    height: 156,
                    size: 3.5,
                    url: "/uploads/thumbnail_speaker_prod_3_5f112b622e.webp",
                  },
                  small: {
                    name: "small_speaker-prod-3.webp",
                    hash: "small_speaker_prod_3_5f112b622e",
                    ext: ".webp",
                    mime: "image/webp",
                    path: null,
                    width: 500,
                    height: 500,
                    size: 23.48,
                    url: "/uploads/small_speaker_prod_3_5f112b622e.webp",
                  },
                },
                hash: "speaker_prod_3_5f112b622e",
                ext: ".webp",
                mime: "image/webp",
                size: 37.8,
                url: "/uploads/speaker_prod_3_5f112b622e.webp",
                previewUrl: null,
                provider: "local",
                provider_metadata: null,
                createdAt: "2023-07-31T06:57:25.066Z",
                updatedAt: "2023-07-31T07:25:37.810Z",
              },
            },
          ],
        },
        categories: {
          data: [
            {
              id: 4,
              attributes: {
                title: "wireless Airbuds",
                createdAt: "2023-07-31T07:00:06.649Z",
                updatedAt: "2023-07-31T07:00:07.408Z",
                publishedAt: "2023-07-31T07:00:07.406Z",
              },
            },
          ],
        },
      },
    },
    {
      id: 5,
      attributes: {
        title:
          'boAt Iris | Round Dial Smart Watch with 1.39" AMOLED Display, Multiple Watch Faces',
        desc: "Shoutout to all who see the glass half full. It is time to switch over to the bright side. Watch Iris will get you through the week with a 7-day battery backup. Thrive through your success with all the important notifications on your smartwatch. The timeless look comes with multiple watch faces and strap options to go with all versions of your style. Nail every sport you play with 8 active sports modes tracking your performance. Don’t worry about sweat and water, it is IP68. Being healthy is an imperative when your watch has a heart rate monitor, oxygen level monitor, sedentary reminder tracking your health 24x7. Pump up your style!",
        price: 1599,
        createdAt: "2023-07-31T07:26:17.825Z",
        updatedAt: "2023-07-31T07:26:18.638Z",
        publishedAt: "2023-07-31T07:26:18.636Z",
        img: {
          data: [
            {
              id: 13,
              attributes: {
                name: "speaker-prod-2.webp",
                alternativeText: null,
                caption: null,
                width: 600,
                height: 600,
                formats: {
                  thumbnail: {
                    name: "thumbnail_speaker-prod-2.webp",
                    hash: "thumbnail_speaker_prod_2_e17a8cb3af",
                    ext: ".webp",
                    mime: "image/webp",
                    path: null,
                    width: 156,
                    height: 156,
                    size: 2.92,
                    url: "/uploads/thumbnail_speaker_prod_2_e17a8cb3af.webp",
                  },
                  small: {
                    name: "small_speaker-prod-2.webp",
                    hash: "small_speaker_prod_2_e17a8cb3af",
                    ext: ".webp",
                    mime: "image/webp",
                    path: null,
                    width: 500,
                    height: 500,
                    size: 20.53,
                    url: "/uploads/small_speaker_prod_2_e17a8cb3af.webp",
                  },
                },
                hash: "speaker_prod_2_e17a8cb3af",
                ext: ".webp",
                mime: "image/webp",
                size: 35.69,
                url: "/uploads/speaker_prod_2_e17a8cb3af.webp",
                previewUrl: null,
                provider: "local",
                provider_metadata: null,
                createdAt: "2023-07-31T06:57:25.005Z",
                updatedAt: "2023-07-31T06:57:25.005Z",
              },
            },
          ],
        },
        categories: {
          data: [
            {
              id: 4,
              attributes: {
                title: "wireless Airbuds",
                createdAt: "2023-07-31T07:00:06.649Z",
                updatedAt: "2023-07-31T07:00:07.408Z",
                publishedAt: "2023-07-31T07:00:07.406Z",
              },
            },
          ],
        },
      },
    },
    {
      id: 6,
      attributes: {
        title: "Rockerz 450 Superman DC Edition - Wireless Bluetooth Headphone",
        desc: "There is no better justice to your playlist than Rockerz 450 boAt | DC edition. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel the power rising up in your veins, just like the sun powers the Man of Steel, as you indulge in your playlist with its 40mm dynamic drivers. Be your own hero as you get ready to rule with #DCYOU.",
        price: 1999,
        createdAt: "2023-07-31T07:26:49.250Z",
        updatedAt: "2023-07-31T07:26:49.982Z",
        publishedAt: "2023-07-31T07:26:49.980Z",
        img: {
          data: [
            {
              id: 9,
              attributes: {
                name: "headphone-prod-3.webp",
                alternativeText: null,
                caption: null,
                width: 600,
                height: 600,
                formats: {
                  thumbnail: {
                    name: "thumbnail_headphone-prod-3.webp",
                    hash: "thumbnail_headphone_prod_3_4962c657d9",
                    ext: ".webp",
                    mime: "image/webp",
                    path: null,
                    width: 156,
                    height: 156,
                    size: 5.31,
                    url: "/uploads/thumbnail_headphone_prod_3_4962c657d9.webp",
                  },
                  small: {
                    name: "small_headphone-prod-3.webp",
                    hash: "small_headphone_prod_3_4962c657d9",
                    ext: ".webp",
                    mime: "image/webp",
                    path: null,
                    width: 500,
                    height: 500,
                    size: 22.98,
                    url: "/uploads/small_headphone_prod_3_4962c657d9.webp",
                  },
                },
                hash: "headphone_prod_3_4962c657d9",
                ext: ".webp",
                mime: "image/webp",
                size: 28.5,
                url: "/uploads/headphone_prod_3_4962c657d9.webp",
                previewUrl: null,
                provider: "local",
                provider_metadata: null,
                createdAt: "2023-07-31T06:57:24.530Z",
                updatedAt: "2023-07-31T06:57:24.530Z",
              },
            },
          ],
        },
        categories: {
          data: [
            {
              id: 2,
              attributes: {
                title: "Bluetooth",
                createdAt: "2023-07-31T06:59:11.143Z",
                updatedAt: "2023-07-31T06:59:11.835Z",
                publishedAt: "2023-07-31T06:59:11.833Z",
              },
            },
          ],
        },
      },
    },
    {
      id: 7,
      attributes: {
        title:
          'boAt Vertex | Smartwatch with Fitness Trackers, 1.69" HD Display, Sleep Tracking, 100+ Watch Faces',
        desc: "When you can be at the apex of your health, why compromise? Meet Watch Vertex, our all-new smartwatch that’s built to improve your lifestyle and push you closer towards your fitness goals. Its large 1.69 inch full capacitive touch display allows you to control everything. Fitness features, including heart rate & SpO2 tracker, health ecosystem, sleep tracker, and more, ensure you get the support you need on your fitness journey. Enjoy going on hikes? Vertex is the perfect travel partner with its extra long battery of up to 10 days. Hustle your journey to the top with Vertex.",
        price: 3999,
        createdAt: "2023-07-31T07:27:28.942Z",
        updatedAt: "2023-07-31T07:27:29.822Z",
        publishedAt: "2023-07-31T07:27:29.821Z",
        img: {
          data: [
            {
              id: 16,
              attributes: {
                name: "speaker-prod-5.webp",
                alternativeText: null,
                caption: null,
                width: 600,
                height: 600,
                formats: {
                  thumbnail: {
                    name: "thumbnail_speaker-prod-5.webp",
                    hash: "thumbnail_speaker_prod_5_18ceff66e8",
                    ext: ".webp",
                    mime: "image/webp",
                    path: null,
                    width: 156,
                    height: 156,
                    size: 2.74,
                    url: "/uploads/thumbnail_speaker_prod_5_18ceff66e8.webp",
                  },
                  small: {
                    name: "small_speaker-prod-5.webp",
                    hash: "small_speaker_prod_5_18ceff66e8",
                    ext: ".webp",
                    mime: "image/webp",
                    path: null,
                    width: 500,
                    height: 500,
                    size: 14.36,
                    url: "/uploads/small_speaker_prod_5_18ceff66e8.webp",
                  },
                },
                hash: "speaker_prod_5_18ceff66e8",
                ext: ".webp",
                mime: "image/webp",
                size: 23.33,
                url: "/uploads/speaker_prod_5_18ceff66e8.webp",
                previewUrl: null,
                provider: "local",
                provider_metadata: null,
                createdAt: "2023-07-31T06:57:25.163Z",
                updatedAt: "2023-07-31T06:57:25.163Z",
              },
            },
          ],
        },
        categories: {
          data: [
            {
              id: 2,
              attributes: {
                title: "Bluetooth",
                createdAt: "2023-07-31T06:59:11.143Z",
                updatedAt: "2023-07-31T06:59:11.835Z",
                publishedAt: "2023-07-31T06:59:11.833Z",
              },
            },
          ],
        },
      },
    },
    {
      id: 8,
      attributes: {
        title:
          "boAt TRebel Airdopes 402 | In-Ear Earbuds With 10mm Driver, IPX4 Sweat",
        desc: "The time hath come for you, my ladies, to walk with elegance dripping with every step you take. Let the royal shine and distinguish yourself from the crowd with boAt Airdopes 402, designed solely to compliment you and your personality. These are the best women wireless earbuds that come in shades matching your moods! Connect and experience the magic of Nirvana with total 30 hours of playtime and Bluetooth V5.2 that never lets you down. Let yourself loose and free, choosing for your own self, with this immersive audio built just to make you experience the unreal boAt signature sound. Weighing as light as opinions should, TRebel Airdopes 402 with its 450mAh battery charging case will assist you in blocking the outside world for a long time.",
        price: 1999,
        createdAt: "2023-07-31T07:28:05.147Z",
        updatedAt: "2023-07-31T07:28:05.884Z",
        publishedAt: "2023-07-31T07:28:05.882Z",
        img: {
          data: [
            {
              id: 17,
              attributes: {
                name: "watch-prod-1.webp",
                alternativeText: null,
                caption: null,
                width: 600,
                height: 600,
                formats: {
                  thumbnail: {
                    name: "thumbnail_watch-prod-1.webp",
                    hash: "thumbnail_watch_prod_1_d756001d2b",
                    ext: ".webp",
                    mime: "image/webp",
                    path: null,
                    width: 156,
                    height: 156,
                    size: 4.11,
                    url: "/uploads/thumbnail_watch_prod_1_d756001d2b.webp",
                  },
                  small: {
                    name: "small_watch-prod-1.webp",
                    hash: "small_watch_prod_1_d756001d2b",
                    ext: ".webp",
                    mime: "image/webp",
                    path: null,
                    width: 500,
                    height: 500,
                    size: 17.47,
                    url: "/uploads/small_watch_prod_1_d756001d2b.webp",
                  },
                },
                hash: "watch_prod_1_d756001d2b",
                ext: ".webp",
                mime: "image/webp",
                size: 21.08,
                url: "/uploads/watch_prod_1_d756001d2b.webp",
                previewUrl: null,
                provider: "local",
                provider_metadata: null,
                createdAt: "2023-07-31T06:57:25.297Z",
                updatedAt: "2023-07-31T06:57:25.297Z",
              },
            },
          ],
        },
        categories: {
          data: [
            {
              id: 3,
              attributes: {
                title: "Smart Watches",
                createdAt: "2023-07-31T06:59:43.092Z",
                updatedAt: "2023-07-31T06:59:43.963Z",
                publishedAt: "2023-07-31T06:59:43.958Z",
              },
            },
          ],
        },
      },
    },
    {
      id: 9,
      attributes: {
        title:
          "boAt Airdopes 441 | Wireless Earbuds with 6mm Driver For Immersive Sound",
        desc: "The time hath come for you, my ladies, to walk with elegance dripping with every step you take. Let the royal shine and distinguish yourself from the crowd with boAt Airdopes 402, designed solely to compliment you and your personality. These are the best women wireless earbuds that come in shades matching your moods! Connect and experience the magic of Nirvana with total 30 hours of playtime and Bluetooth V5.2 that never lets you down. Let yourself loose and free, choosing for your own self, with this immersive audio built just to make you experience the unreal boAt signature sound. Weighing as light as opinions should, TRebel Airdopes 402 with its 450mAh battery charging case will assist you in blocking the outside world for a long time.",
        price: 966,
        createdAt: "2023-07-31T07:28:24.703Z",
        updatedAt: "2023-07-31T07:28:25.335Z",
        publishedAt: "2023-07-31T07:28:25.334Z",
        img: {
          data: [
            {
              id: 18,
              attributes: {
                name: "watch-prod-2.webp",
                alternativeText: null,
                caption: null,
                width: 600,
                height: 600,
                formats: {
                  thumbnail: {
                    name: "thumbnail_watch-prod-2.webp",
                    hash: "thumbnail_watch_prod_2_ed83f91500",
                    ext: ".webp",
                    mime: "image/webp",
                    path: null,
                    width: 156,
                    height: 156,
                    size: 5.36,
                    url: "/uploads/thumbnail_watch_prod_2_ed83f91500.webp",
                  },
                  small: {
                    name: "small_watch-prod-2.webp",
                    hash: "small_watch_prod_2_ed83f91500",
                    ext: ".webp",
                    mime: "image/webp",
                    path: null,
                    width: 500,
                    height: 500,
                    size: 23.22,
                    url: "/uploads/small_watch_prod_2_ed83f91500.webp",
                  },
                },
                hash: "watch_prod_2_ed83f91500",
                ext: ".webp",
                mime: "image/webp",
                size: 29.46,
                url: "/uploads/watch_prod_2_ed83f91500.webp",
                previewUrl: null,
                provider: "local",
                provider_metadata: null,
                createdAt: "2023-07-31T06:57:25.332Z",
                updatedAt: "2023-07-31T06:57:25.332Z",
              },
            },
          ],
        },
        categories: {
          data: [],
        },
      },
    },
  ]);
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}

      <div className="products">
        {data.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};
export default Products;
