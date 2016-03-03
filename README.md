## hexo-theme-zxcvb

zxcvb is a them for [hexo][hexo].

### Usage

To use theme, you just need to clone this repo into the themes directory of your hexo site.

```sh
cd /path/to/your/hexo/site
git clone https://github.com/haishanh/hexo-theme-zxcvb themes/zxcvb
```

Then change your `theme` setting in `_config.yml`.

```text
theme: zxcvb
```

### Features

#### Post banner

Add the following config in the front matter of your post to get a stunning edge to edge banner picture.

```text
---
title: Test post
date: 2016-02-23
updated: 2016-02-29
banner:
  image: http://7fva40.com1.z0.glb.clouddn.com/carlog-404-sprite.jpg
  size: cover
  position: center
  height: 450px
---
```

This will add **inline style** to the `<header>` element, rule mapping as below:

```text
 * image    -> background-image    (this value can't be ommited)
 * size     -> background-size     (default to "cover")
 * position -> background-position (default to "center")
 * height   -> height              (default to "450px")
```

### Customization

Install requirements first.

```sh
cd themes/zxcvb
npm install
```

The CSS is built from sass(scss). To build the CSS, run:

```sh
gulp sass
```

**Note**: When you add more menu in the `_config.yml`, you should update the value `$menu-num` in `source/_scss/_var.scss` accordingly. If not, the dropdown menu (only on moblie screen) may not display properly.

### What is missing

Since I only built this theme for myself. There are some features I don't need and currently not implemented.

 * categories
 * tags
 * photo layout/post
 * link layout/post


[hexo]: https://hexo.io