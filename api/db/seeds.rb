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