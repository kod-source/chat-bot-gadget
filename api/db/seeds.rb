User.create!(
  email: 'host@gmail.com',
  name: 'ホストユーザー',
  password: 'host.1234',
  password_confirmation: 'host.1234',
  avatar: '',
  memo: "こちらはメモになります。\n" + "こちらに自由にメモなどを残しておくことができます。\n\n" + "是非ご活用ください！",
)
User.create!(
  email: 'test@gmail.com',
  name: 'テストユーザー',
  password: 'test.1234',
  password_confirmation: 'test.1234',
  avatar: '',
  memo: "こちらはテストユーザーです。\n" + "こちらに自由にメモなどを残しておくことができます。\n\n" + "是非ご活用ください！",
)

Product.create!(
  name: 'iPad Air4',
  memo: "こちらのiPadはカラフルな色があり、お好みなカラーがあれば良いですね。\n" + "現在のiPadAir4はiPadProとの差が特になく、万人におすすでできる商品となってます。\n" + "現在ではプロ殺しのAirと言われているくらいとてもコスパの良い製品に仕上がっているのではないかと思います。\n" + "まず色々なことがしたいけど、特に何買ったら良いか分からな人などはこちらのiPadは最適になるのではないかと思います。\n" + "是非一度店頭などお試しください！\n\n" + "※こちらの価格はWiFiモデルの価格となっており、価格は税込みの価格です。",
  image: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-air-select-202009?wid=886&hei=1070&fmt=jpeg&qlt=80&.v=1599066777000',
  most_low_price: 63580,
  highest_price: 82280,
  url: 'https://www.apple.com/jp_edu_1460/shop/buy-ipad/ipad-air'
)
Product.create!(
  name: 'iPad Pro 11インチ（第1世代）[整備済製品]',
  memo: "2020年に発売したiPad Proになります。" + "\n少し古く感じる方もいるかもしれませんが、そんなことなく現役扱うことができるかと思います。" + "\nこちらは整備済製品となっているため、iPad Air4よりも安い価格で購入することができ、私のイチオシの商品になっております。" + "\n※整備済製品のため、在庫がない可能性があるためご了承ください。" +"\n\n※こちらの価格はWiFiモデルの価格となっており、価格は税込みの価格です。",
  image: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-11-wifi-spacegray-2019?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1581985486323',
  most_low_price: 60800,
  highest_price: 110800,
  url: 'https://www.apple.com/jp/shop/refurbished/ipad/11インチipad-pro'
)
Product.create!(
  name: 'iPad Pro 11インチ（第2世代）[整備済製品]',
  memo: "2021年に発売したiPad Proになります。少し前の機種になりますが、とても性能も高くどのユーザーでも満足できるのではないかと思います。" + "\n※整備済製品のため、在庫がない可能性があるためご了承ください。" + "\n\n※こちらの価格はWiFiモデルの価格となっており、価格は税込みの価格です。",
  image: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-11-wifi-spacegray-2020?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1627667236000',
  most_low_price: 71800,
  highest_price: 121800,
  url: 'https://www.apple.com/jp_edu_1460/shop/buy-ipad/ipad-air'
)
Product.create!(
  name: 'iPad Pro 11インチ（第3世代）',
  memo: "こちらは最新のiPad Proになります。マシンスペックがとても高くて、使いこなせるユーザーはなかなかいないのでないかと思います。" + "\nしかし、ロマンなスペックと最高級のディスプレイが搭載されているため、最高のタブレットになること間違い無いです！" + "\n\n※こちらの価格はWiFiモデルの価格となっており、価格は税込みの価格です。",
  image: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-pro-11-select-202104_GEO_JP?wid=970&amp;hei=1020&amp;fmt=png-alpha&amp;.v=1617899794000',
  most_low_price: 94800,
  highest_price: 226800,
  url: 'https://www.apple.com/jp/shop/buy-ipad/ipad-pro'
)
Product.create!(
  name: 'iPad Pro 12.9インチ（第3世代）[整備済製品]',
  memo: "2020年に発売したiPad Proになります。" + "\n少し古く感じる方もいるかもしれませんが、そんなことなく現役扱うことができるかと思います。" + "\nこちらは整備済製品となっているため、お求めやすい価格で購入することができ、私のイチオシの商品になっております。" + "\n※整備済製品のため、在庫がない可能性があるためご了承ください。" + "\n\n※こちらの価格はWiFiモデルの価格となっており、価格は税込みの価格です。",
  image: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-12-cell-spacegray-2019?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1581985511549',
  most_low_price: 74800,
  highest_price: 124800,
  url: 'https://www.apple.com/jp/shop/refurbished/ipad/12-9インチipad-pro'
)
Product.create!(
  name: 'iPad Pro 12.9インチ（第4世代）[整備済製品]',
  memo: "2021年に発売したiPad Proになります。少し前の機種になりますが、とても性能も高くどのユーザーでも満足できるのではないかと思います。" + "\n※整備済製品のため、在庫がない可能性があるためご了承ください。" + "\n\n※こちらの価格はWiFiモデルの価格となっており、価格は税込みの価格です。",
  image: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-12-wifi-spacegray-2020?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1626721066000',
  most_low_price: 88800,
  highest_price: 138800,
  url: 'https://www.apple.com/jp/shop/refurbished/ipad/12-9インチipad-pro'
)
Product.create!(
  name: 'iPad Pro 12.9インチ（第5世代）',
  memo: "こちらは最新のiPad Proになります。マシンスペックがとても高くて、使いこなせるユーザーはなかなかいないのでないかと思います。" + "\nしかし、ロマンなスペックと最高級のディスプレイが搭載されているため、最高のタブレットになること間違い無いです！" + "\n\n※こちらの価格はWiFiモデルの価格となっており、価格は税込みの価格です。",
  image: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202104_GEO_JP?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1617920528000',
  most_low_price: 129800,
  highest_price: 261800,
  url: 'https://www.apple.com/jp/shop/buy-ipad/ipad-pro'
)
Product.create!(
  name: 'iPad（第9世代）',
  memo: "こちらは無印のiPadになります。最安のiPadになっており、エントリー機としては最高の商品になるのでは無いかと思います。" + "\nさらにiPad（第9世代）からは最低スペックの容量が32GBから64GBに増加し、実質的なプライスダウンになっているのでiPadを試したい人には最適だと思います。" + "\n\n※こちらの価格はWiFiモデルの価格となっており、価格は税込みの価格です。",
  image: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-2021-hero-landing-wifi?wid=900&hei=1046&fmt=jpeg&qlt=80&.v=1630973863000',
  most_low_price: 39800,
  highest_price: 57800,
  url: 'https://www.apple.com/jp/shop/buy-ipad/ipad-10-2'
)
Product.create!(
  name: 'iPad mini6',
  memo: "こちらはiPad mini6になります。今回のアップデートで大幅な進化遂げました。iPad Air4をそのまま小さくしたものをイメージしてもらえるとわかりやすいかと思います。" + "\n特に持ち運んで使用したり、家でゴロゴロしながら使うなどいろいろな用途が考えらるかと思います。" + "\niPad miniは昔からこのサイズ感が大好きでminiファンが沢山いるくらいサイズ感はとてもちょうど良く、重量軽くハマる人にはとことんハマる商品になっているかと思います。" + "\n\n※こちらの価格はWiFiモデルの価格となっており、価格は税込みの価格です。",
  image: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-mini-select-202109?wid=1080&hei=1060&fmt=jpeg&qlt=80&.v=1631751017000',
  most_low_price: 59800,
  highest_price: 77800,
  url: 'https://www.apple.com/jp/shop/buy-ipad/ipad-mini'
)

Product.find_by(name: 'iPad Air4').likes.create!(
  user_id: User.find_by(name: 'ホストユーザー').id,
)
Product.find_by(name: 'iPad Pro 11インチ（第1世代）[整備済製品]').likes.create!(
  user_id: User.find_by(name: 'ホストユーザー').id,
)
Product.find_by(name: 'iPad Pro 11インチ（第3世代）').likes.create!(
  user_id: User.find_by(name: 'ホストユーザー').id,
)
Product.find_by(name: 'iPad Pro 12.9インチ（第4世代）[整備済製品]').likes.create!(
  user_id: User.find_by(name: 'ホストユーザー').id,
)
Product.find_by(name: 'iPad mini6').likes.create!(
  user_id: User.find_by(name: 'ホストユーザー').id,
)
Product.find_by(name: 'iPad（第9世代）').likes.create!(
  user_id: User.find_by(name: 'ホストユーザー').id,
)

Ipad.create!(
  product_id: Product.find_by(name: 'iPad Air4').id,
  screen_size: 10.9,
  chip: 'A14',
  high_perform_camera: false,
  type_c: true,
  five_g: false,
  pencil_two: true,
  face_id: false,
  clean_display: true,
  center_frame: false,
  speaker_count: 2,
  dual_speaker: true,
  thunderbolt: false,
  weight: 458,
  high_refresh_rate: false,
  smart_connector: true,
  many_colors: true
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 458).id,
  title: '全体',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-air-select-202009?wid=886&hei=1070&fmt=jpeg&qlt=80&.v=1599066777000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 458).id,
  title: 'スペースグレイ',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-air-select-wifi-spacegray-202009?wid=940&hei=1112&fmt=png-alpha&.v=1598650646000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 458).id,
  title: 'グリーン',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-air-select-wifi-green-202009?wid=940&hei=1112&fmt=png-alpha&.v=1598650644000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 458).id,
  title: 'ローズゴールド',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-air-select-wifi-gold-202009?wid=940&hei=1112&fmt=png-alpha&.v=1598650644000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 458).id,
  title: 'スカイブルー',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-air-select-wifi-blue-202009?wid=940&hei=1112&fmt=png-alpha&.v=1598650644000'
)

Ipad.create!(
  product_id: Product.find_by(name: 'iPad Pro 11インチ（第1世代）[整備済製品]').id,
  screen_size: 11,
  chip: 'A12X',
  high_perform_camera: false,
  type_c: true,
  five_g: false,
  pencil_two: true,
  face_id: true,
  clean_display: true,
  center_frame: false,
  speaker_count: 4,
  dual_speaker: true,
  thunderbolt: false,
  weight: 468,
  high_refresh_rate: true,
  smart_connector: true,
  many_colors: false
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 468).id,
  title: '全体',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-11-wifi-spacegray-2019_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1581985486105'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 468).id,
  title: 'スペースグレイ',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-11-wifi-spacegray-2019?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1581985486323'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 468).id,
  title: 'シルバー',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-11-wifi-silver-2019?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1581985473264'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 468).id,
  title: '正面',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-11-wifi-spacegray-2019_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1581985485816'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 468).id,
  title: '箱',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-11-wifi-spacegray-2019_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1581985483872'
)

Ipad.create!(
  product_id: Product.find_by(name: 'iPad Pro 11インチ（第2世代）[整備済製品]').id,
  screen_size: 11,
  chip: 'A12Z',
  high_perform_camera: true,
  type_c: true,
  five_g: false,
  pencil_two: true,
  face_id: true,
  clean_display: true,
  center_frame: false,
  speaker_count: 4,
  dual_speaker: true,
  thunderbolt: false,
  weight: 471,
  high_refresh_rate: true,
  smart_connector: true,
  many_colors: false
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 471).id,
  title: '全体',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-11-wifi-silver-2020_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1627667229000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 471).id,
  title: 'スペースグレイ',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-11-wifi-spacegray-2020?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1627667236000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 471).id,
  title: 'シルバー',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-11-wifi-silver-2020?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1627667234000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 471).id,
  title: '箱',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-11-wifi-silver-2020_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1627667224000'
)

Ipad.create!(
  product_id: Product.find_by(name: 'iPad Pro 11インチ（第3世代）').id,
  screen_size: 11,
  chip: 'M1',
  high_perform_camera: true,
  type_c: true,
  five_g: true,
  pencil_two: true,
  face_id: true,
  clean_display: true,
  center_frame: true,
  speaker_count: 4,
  dual_speaker: true,
  thunderbolt: true,
  weight: 466,
  high_refresh_rate: true,
  smart_connector: true,
  many_colors: false
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 466).id,
  title: '全体',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-pro-11-select-202104_GEO_JP?wid=970&amp;hei=1020&amp;fmt=png-alpha&amp;.v=1617899794000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 466).id,
  title: 'スペースグレイ',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-pro-11-select-cell-spacegray-202104_GEO_JP?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1617925781000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 466).id,
  title: 'シルバー',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-pro-11-select-cell-silver-202104_GEO_JP?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1617912655000'
)

Ipad.create!(
  product_id: Product.find_by(name: 'iPad Pro 12.9インチ（第3世代）[整備済製品]').id,
  screen_size: 12.9,
  chip: 'A12X',
  high_perform_camera: false,
  type_c: true,
  five_g: false,
  pencil_two: true,
  face_id: true,
  clean_display: true,
  center_frame: false,
  speaker_count: 4,
  dual_speaker: true,
  thunderbolt: false,
  weight: 631,
  high_refresh_rate: true,
  smart_connector: true,
  many_colors: false
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 631).id,
  title: 'スペースグレイ',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-12-cell-spacegray-2019?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1581985511549'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 631).id,
  title: 'シルバー',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-12-cell-silver-2019?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1581985498474'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 631).id,
  title: '正面',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-12-cell-spacegray-2019_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1581985511176'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 631).id,
  title: '箱',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-12-cell-spacegray-2019_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1581985509563'
)


Ipad.create!(
  product_id: Product.find_by(name: 'iPad Pro 12.9インチ（第4世代）[整備済製品]').id,
  screen_size: 12.9,
  chip: 'A12Z',
  high_perform_camera: true,
  type_c: true,
  five_g: false,
  pencil_two: true,
  face_id: true,
  clean_display: true,
  center_frame: false,
  speaker_count: 4,
  dual_speaker: true,
  thunderbolt: false,
  weight: 641,
  high_refresh_rate: true,
  smart_connector: true,
  many_colors: false
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 641).id,
  title: '全体',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-12-wifi-silver-2020_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1626721065000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 641).id,
  title: 'スペースグレイ',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-12-wifi-spacegray-2020?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1626721066000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 641).id,
  title: 'シルバー',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-12-wifi-silver-2020?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1626721066000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 641).id,
  title: '箱',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-ipad-pro-12-wifi-silver-2020_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1626721054000'
)

Ipad.create!(
  product_id: Product.find_by(name: 'iPad Pro 12.9インチ（第5世代）').id,
  screen_size: 12.9,
  chip: 'M1',
  high_perform_camera: true,
  type_c: true,
  five_g: true,
  pencil_two: true,
  face_id: true,
  clean_display: true,
  center_frame: true,
  speaker_count: 4,
  dual_speaker: true,
  thunderbolt: true,
  weight: 682,
  high_refresh_rate: true,
  smart_connector: true,
  many_colors: false
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 682).id,
  title: '全体',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-pro-12-select-202104_GEO_JP?wid=970&amp;hei=1020&amp;fmt=png-alpha&amp;.v=1617903446000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 682).id,
  title: 'スペースグレイ',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202104_GEO_JP?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1617920528000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 682).id,
  title: 'シルバー',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-pro-12-select-cell-silver-202104_GEO_JP?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1617919660000'
)

Ipad.create!(
  product_id: Product.find_by(name: 'iPad（第9世代）').id,
  screen_size: 10.2,
  chip: 'A13',
  high_perform_camera: false,
  type_c: false,
  five_g: false,
  pencil_two: false,
  face_id: false,
  clean_display: false,
  center_frame: true,
  speaker_count: 2,
  dual_speaker: false,
  thunderbolt: false,
  weight: 487,
  high_refresh_rate: false,
  smart_connector: true,
  many_colors: false
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 487).id,
  title: '全体',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-2021-hero-landing-wifi?wid=900&hei=1046&fmt=jpeg&qlt=80&.v=1630973863000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 487).id,
  title: 'スペースグレイ',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-2021-hero-space-wifi-select?wid=940&hei=1112&fmt=png-alpha&.v=1631308881000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 487).id,
  title: 'シルバー',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-2021-hero-silver-wifi-select?wid=940&hei=1112&fmt=png-alpha&.v=1631308880000'
)

Ipad.create!(
  product_id: Product.find_by(name: 'iPad mini6').id,
  screen_size: 8.3,
  chip: 'A15',
  high_perform_camera: false,
  type_c: true,
  five_g: true,
  pencil_two: true,
  face_id: true,
  clean_display: true,
  center_frame: true,
  speaker_count: 2,
  dual_speaker: true,
  thunderbolt: false,
  weight: 293,
  high_refresh_rate: false,
  smart_connector: false,
  many_colors: true
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 293).id,
  title: '全体',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-mini-select-202109?wid=1080&hei=1060&fmt=jpeg&qlt=80&.v=1631751017000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 293).id,
  title: 'スペースグレイ',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-mini-select-wifi-space-gray-202109?wid=940&hei=1112&fmt=png-alpha&.v=1629840743000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 293).id,
  title: 'ピンク',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-2021-hero-silver-wifi-select?wid=940&hei=1112&fmt=png-alpha&.v=1631308880000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 293).id,
  title: 'パープル',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-mini-select-wifi-purple-202109?wid=940&hei=1112&fmt=png-alpha&.v=1629840735000'
)
ImageSwiper.create!(
  ipad_id: Ipad.find_by(weight: 293).id,
  title: 'スターライト',
  url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-mini-select-wifi-starlight-202109?wid=940&hei=1112&fmt=png-alpha&.v=1629840745000'
)

Product.create!(
  [
    {
      name: '13インチMacBook Air',
      memo: "こちらはM1チップの搭載のMabBook Airになります。\n" + "最新のMacBook Airはプロと同等の性能があり一番人気の商品ではないのかと思います。\n" + "薄くて持ち運びやすさも抜群で今MacBookを書くならこれ一択なのではないかと思うくらい番人におすすめできるものになっています。" + "現在は整備品済製品として安く購入できるかもしれないので購入さるないと要チェックをお勧めします。\n\n" + "※こちらの価格はWiFiモデルの価格となっており、価格は税込みの価格です。",
      image: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000',
      most_low_price: 115280,
      highest_price: 230780,
      url: 'https://www.apple.com/jp/shop/buy-mac/macbook-air'
    },
    {
      name: '13インチMacBook Pro',
      memo: "こちらはM1チップの搭載のMabBook Proになります。\n" + "MacBook Airとの違いとしては、ファンの有無やTouchBarの有無などがあります。\n" + "こちらのMacBook Proは現状のMacBookの中で一番バッテリー性能が良いというのもポイントになるかと思います。" + "現在は整備品済製品として安く購入できるかもしれないので購入さるないと要チェックをお勧めします。\n\n" + "※こちらの価格はWiFiモデルの価格となっており、価格は税込みの価格です。",
      image: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_JP?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632948894000',
      most_low_price: 148280,
      highest_price: 258280,
      url: 'https://www.apple.com/jp/shop/buy-mac/macbook-pro/13インチ'
    },
    {
      name: '14インチMacBook Pro',
      memo: "こちらはM1Pro、M1Maxチップの搭載のMabBook Proになります。\n" + "こちらのMacBookは本当のプロ向けモデルになっており、性能がとても高く一般的な人では使いこなすのは困難なのではないかと思います。\n" + "こちらのMacBook Proは画面サイズが大きなりましたが、少し重量も増え他のがデメリットにもなるかと思います。\n" + "こちらのモデルを買う方は本当にこのスペックが必要な人のみを購入をお勧めします。" + "是非一度店頭などお試しください！\n\n" + "※こちらの価格はWiFiモデルの価格となっており、価格は税込みの価格です。",
      image: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_JP?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633657361000',
      most_low_price: 239800,
      highest_price: 673800,
      url: 'https://www.apple.com/jp/shop/buy-mac/macbook-pro/14インチ'
    },
    {
      name: '16インチMacBook Pro',
      memo: "こちらはM1Pro、M1Maxチップの搭載のMabBook Proになります。\n" + "こちらのMacBookは本当のプロ向けモデルになっており、性能がとても高く一般的な人では使いこなすのは困難なのではないかと思います。\n" + "こちらのMacBook Proは画面サイズが大きいのでマルチタスクがやりやすいかと思います。しかし、その分重量も大きくなり持ち運ぶのには適していないかと思います。\n" + "こちらのMacBook Proにしかない機能として、ハイパワーモードというのも搭載しております。" + "是非一度店頭などお試しください！\n\n" + "※こちらの価格はWiFiモデルの価格となっており、価格は税込みの価格です。",
      image: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp16-spacegray-select-202110_GEO_JP?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633657684000',
      most_low_price: 299800,
      highest_price: 707800,
      url: 'https://www.apple.com/jp/shop/buy-mac/macbook-pro/16インチ'
    },
    {
      name: '13インチMacBook Pro [整備済製品]',
      memo: "こちらはintelチップの搭載したのMabBook Proになります。\n" + "intelチップではないと動かないアプリを使用しないかりぎりはApple Silicon搭載のMac Bookを購入するのをお勧めします。\n" + "しかしApple Siliconに対応していないアプリなどがあるのが現状です。\n" + "こちらのMacBook はとてもファンが周りときには雑音くらいなる時もあり、バッテリー性能もそこまで解くないため、購入させる場合はそちらも考慮することをお勧めします。" + "是非一度店頭などお試しください！\n\n" + "※こちらの価格はWiFiモデルの価格となっており、価格は税込みの価格です。",
      image: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-mbp13touchbar-performance-space-gallery-2020_GEO_JP?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1593570148000',
      most_low_price: 175780,
      highest_price: 194480,
      url: 'https://www.apple.com/jp/shop/refurbished/mac/macbook-pro'
    },
    {
      name: '16インチMacBook Pro [整備済製品]',
      memo: "こちらはintelチップの搭載したのMabBook Proになります。\n" + "intelチップではないと動かないアプリを使用しないかりぎりはApple Silicon搭載のMac Bookを購入するのをお勧めします。\n" + "しかしApple Siliconに対応していないアプリなどがあるのが現状です。\n" + "こちらのMacBook はとてもファンが周りときには雑音くらいなる時もあり、バッテリー性能もそこまで解くないため、購入させる場合はそちらも考慮することをお勧めします。" + "是非一度店頭などお試しください！\n\n" + "※こちらの価格はWiFiモデルの価格となっており、価格は税込みの価格です。",
      image: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-mbp16touch-space-gallery-2020_GEO_JP?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1596750726000',
      most_low_price: 227800,
      highest_price: 424150,
      url: 'https://www.apple.com/jp/shop/refurbished/mac/macbook-pro'
    }
  ]
)

Mac.create!(
  [
    {
      product_id: Product.find_by(name: '13インチMacBook Air').id,
      apple_silicon: true,
      chips: ['M1'],
      size: 13.3,
      max_memory: 16,
      max_cpu_core: 8,
      max_gpu_core: 8,
      max_storage: 2,
      battery_driven_time: 18,
      touch_bar: false,
      storages: ['256GB', '512GB', '1TB', '2TB'],
      memorys: ['8GB', '16GB'],
      mini_led_display: false,
      pro_motion_display: false,
      weight: 1.29,
      in_camera_pixel: 720,
      thunderbolt_count: 2,
      hdmi_port: false,
      sd_card_slot: false,
      notch: false,
      wi_fi_six: true,
      power_adapter: 30,
      fan_existence: false
    },
    {
      product_id: Product.find_by(name: '13インチMacBook Pro').id,
      apple_silicon: true,
      chips: ['M1'],
      size: 13.3,
      max_memory: 16,
      max_cpu_core: 8,
      max_gpu_core: 8,
      max_storage: 2,
      battery_driven_time: 20,
      touch_bar: true,
      storages: ['256GB', '512GB', '1TB', '2TB'],
      memorys: ['8GB', '16GB'],
      mini_led_display: false,
      pro_motion_display: false,
      weight: 1.4,
      in_camera_pixel: 720,
      thunderbolt_count: 2,
      hdmi_port: false,
      sd_card_slot: false,
      notch: false,
      wi_fi_six: true,
      power_adapter: 61,
      fan_existence: true
    },
    {
      product_id: Product.find_by(name: '14インチMacBook Pro').id,
      apple_silicon: true,
      chips: ['M1 Pro', 'M1 Max'],
      size: 14.2,
      max_memory: 64,
      max_cpu_core: 10,
      max_gpu_core: 32,
      max_storage: 8,
      battery_driven_time: 17,
      touch_bar: false,
      storages: ['512GB', '1TB', '2TB', '4TB', '8TB'],
      memorys: ['16GB', '32GB', '64GB(M1 Max)'],
      mini_led_display: true,
      pro_motion_display: true,
      weight: 1.6,
      in_camera_pixel: 1080,
      thunderbolt_count: 3,
      hdmi_port: true,
      sd_card_slot: true,
      notch: true,
      wi_fi_six: true,
      power_adapter: 67,
      fan_existence: true
    },
    {
      product_id: Product.find_by(name: '16インチMacBook Pro').id,
      apple_silicon: true,
      chips: ['M1 Pro', 'M1 Max'],
      size: 16.2,
      max_memory: 64,
      max_cpu_core: 10,
      max_gpu_core: 32,
      max_storage: 8,
      battery_driven_time: 21,
      touch_bar: false,
      storages: ['512GB', '1TB', '2TB', '4TB', '8TB'],
      memorys: ['16GB', '32GB', '64GB(M1 Max)'],
      mini_led_display: true,
      pro_motion_display: true,
      weight: 2.1,
      in_camera_pixel: 1080,
      thunderbolt_count: 3,
      hdmi_port: true,
      sd_card_slot: true,
      notch: true,
      wi_fi_six: true,
      power_adapter: 140,
      fan_existence: true
    },
    {
      product_id: Product.find_by(name: '13インチMacBook Pro [整備済製品]').id,
      apple_silicon: false,
      chips: ['Core i5', 'Core i7'],
      size: 13.3,
      max_memory: 32,
      max_cpu_core: 4,
      max_storage: 4,
      battery_driven_time: 10,
      touch_bar: true,
      storages: ['512GB', '1TB', '2TB', '4TB'],
      memorys: ['16GB', '32GB'],
      mini_led_display: false,
      pro_motion_display: false,
      weight: 1.4,
      in_camera_pixel: 720,
      thunderbolt_count: 4,
      hdmi_port: false,
      sd_card_slot: false,
      notch: false,
      wi_fi_six: false,
      power_adapter: 61,
      fan_existence: true
    },
    {
      product_id: Product.find_by(name: '16インチMacBook Pro [整備済製品]').id,
      apple_silicon: false,
      chips: ['Core i5', 'Core i7', 'Core i9'],
      size: 16,
      max_memory: 64,
      max_cpu_core: 8,
      max_storage: 8,
      battery_driven_time: 11,
      touch_bar: true,
      storages: ['512GB', '1TB', '2TB', '4TB', '8TB'],
      memorys: ['16GB', '32GB', '64GB'],
      mini_led_display: false,
      pro_motion_display: false,
      weight: 2.0,
      in_camera_pixel: 720,
      thunderbolt_count: 4,
      hdmi_port: false,
      sd_card_slot: false,
      notch: false,
      wi_fi_six: false,
      power_adapter: 96,
      fan_existence: true
    }
  ]
)

Mac.find_by(product_id: Product.find_by(name: '13インチMacBook Air').id).image_swipers.create!(
  [
    {
      title: 'スペースグレイ',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/macbook-air-space-gray-config-201810?wid=1078&hei=624&fmt=jpeg&qlt=80&.v=1633033424000'
    },
    {
      title: 'ゴールド',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000'
    },
    {
      title: 'シルバー',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/macbook-air-silver-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000'
    },
    {
      title: 'キーボード',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/macbook-air-gallery1-20201110_GEO_JP?wid=4000&hei=3072&fmt=jpeg&qlt=80&.v=1603911917000'
    },
    {
      title: '端子',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/macbook-air-gallery2-20201110?wid=4000&hei=3072&fmt=jpeg&qlt=80&.v=1603399116000'
    },
    {
      title: '横画像',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/macbook-air-gallery4-20201110?wid=4000&hei=3072&fmt=jpeg&qlt=80&.v=1603399116000'
    },
    {
      title: '同梱物',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/macbook-air-silver-box-hw-201810?wid=1110&hei=784&fmt=jpeg&qlt=80&.v=1539296025543'
    }
  ]
)
Mac.find_by(product_id: Product.find_by(name: '13インチMacBook Pro').id).image_swipers.create!(
  [
    {
      title: 'スペースグレイ',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_JP?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632948894000'
    },
    {
      title: 'シルバー',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp-silver-select-202011_GEO_JP?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632950246000',
    },
    {
      title: '横写真',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp-silver-gallery1-202011?wid=4000&hei=3072&fmt=jpeg&qlt=80&.v=1632937794000'
    },
    {
      title: '正面',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp-silver-gallery2-202011_GEO_JP?wid=4000&hei=3072&fmt=jpeg&qlt=80&.v=1632936085000'
    },
    {
      title: '端子',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp-silver-gallery3-202011?wid=4000&hei=3072&fmt=jpeg&qlt=80&.v=1603908512000'
    },
    {
      title: '上部',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp-silver-gallery4-202011?wid=4000&hei=3072&fmt=jpeg&qlt=80&.v=1603475932000'
    }
  ]
)
Mac.find_by(product_id: Product.find_by(name: '14インチMacBook Pro').id).image_swipers.create!(
  [
    {
      title: 'スペースグレイ',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_JP?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633657361000'
    },
    {
      title: 'シルバー',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp14-silver-select-202110_GEO_JP?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633657233000'
    },
    {
      title: '正面',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp14-silver-gallery2-202110?wid=4000&hei=3072&fmt=jpeg&qlt=80&.v=1632796176000'
    },
    {
      title: '端子',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp14-silver-gallery3-202110?wid=4000&hei=3072&fmt=jpeg&qlt=80&.v=1632796167000'
    },
    {
      title: '上部',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp14-silver-gallery4-202110?wid=4000&hei=3072&fmt=jpeg&qlt=80&.v=1632796175000'
    },
    {
      title: '全体',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp14-silver-gallery5-202110?wid=4000&hei=3072&fmt=jpeg&qlt=80&.v=1632796173000'
    }
  ]
)
Mac.find_by(product_id: Product.find_by(name: '16インチMacBook Pro').id).image_swipers.create(
  [
    {
      title: 'スペースグレイ',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp16-spacegray-select-202110_GEO_JP?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633657684000'
    },
    {
      title: 'シルバー',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp16-silver-select-202110_GEO_JP?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633657507000'
    },
    {
      title: '正面',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp16-spacegray-gallery2-202110?wid=4000&hei=3072&fmt=jpeg&qlt=80&.v=1632799174000'
    },
    {
      title: '端子',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp16-spacegray-gallery3-202110?wid=4000&hei=3072&fmt=jpeg&qlt=80&.v=1632799177000'
    },
    {
      title: '上部',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp16-spacegray-gallery4-202110?wid=4000&hei=3072&fmt=jpeg&qlt=80&.v=1632799181000'
    },
    {
      title: '全体',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp16-spacegray-gallery5-202110?wid=4000&hei=3072&fmt=jpeg&qlt=80&.v=1632799183000'
    }
  ]
)
Mac.find_by(product_id: Product.find_by(name: '13インチMacBook Pro [整備済製品]').id).image_swipers.create!(
  [
    {
      title: 'スペースグレイ',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-mbp13touchbar-performance-space-gallery-2020_GEO_JP?wid=400&hei=400&fmt=jpeg&qlt=80&.v=1593570148000'
    },
    {
      title: '横写真',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-mbp13touchbar-performance-space-gallery-2020_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591921664000'
    },
    {
      title: '横の端子',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-mbp13touchbar-performance-space-gallery-2020_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1592520584000'
    },
    {
      title: '正面',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-mbp13touchbar-performance-space-gallery-2020_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1592520595000'
    },
    {
      title: '箱',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-mbp13touchbar-performance-space-gallery-2020_AV4?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1592520591000'
    }
  ]
)
Mac.find_by(product_id: Product.find_by(name: '16インチMacBook Pro [整備済製品]').id).image_swipers.create!(
  [
    {
      title: 'スペースグレイ',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-mbp16touch-space-gallery-2019_GEO_JP?wid=400&hei=400&fmt=jpeg&qlt=80&.v=1582233091168'
    },
    {
      title: 'シルバー',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-mbp16touch-silver-gallery-2019_GEO_JP?wid=400&hei=400&fmt=jpeg&qlt=80&.v=1582233074431'
    },
    {
      title: '横写真',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-mbp13touchbar-performance-space-gallery-2020_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591921664000'
    },
    {
      title: '横の端子',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-mbp13touchbar-performance-space-gallery-2020_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1592520584000'
    },
    {
      title: '正面',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-mbp13touchbar-performance-space-gallery-2020_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1592520595000'
    },
    {
      title: '箱',
      url: 'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-mbp13touchbar-performance-space-gallery-2020_AV4?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1592520591000'
    }
  ]
)

Product.find_by(name: '13インチMacBook Air').likes.create!(
  user_id: User.find_by(name: 'ホストユーザー').id,
)
Product.find_by(name: '13インチMacBook Pro').likes.create!(
  user_id: User.find_by(name: 'ホストユーザー').id,
)
Product.find_by(name: '14インチMacBook Pro').likes.create!(
  user_id: User.find_by(name: 'ホストユーザー').id,
)