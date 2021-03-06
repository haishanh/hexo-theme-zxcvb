<p align="center">
  <a href="http://zxcvb.hanhaishan.com">
    <img src="https://github.com/haishanh/hexo-theme-zxcvb/blob/master/_assets/zxcvb-black.png">
  </a>
  <p align="center">A <a href="https://hexo.io">hexo</a> theme</p>
  <p align="center"><a href="http://zxcvb.hanhaishan.com/">== DEMO ==</a></p>
</p>

### Usage

To use this theme, you just need to clone this repo into directory `themes` of your hexo site.

```sh
cd /path/to/your/hexo/site
git clone https://github.com/haishanh/hexo-theme-zxcvb themes/zxcvb
```

Then change your `theme` setting in `_config.yml`.

```text
theme: zxcvb
```

### Features

#### Post hero

Add the following config in the front matter of your post to get a stunning edge to edge banner picture(hero).

```text
---
title: Test post
date: 2016-02-23
updated: 2016-02-29
hero:
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
 * color    -> background-color    (default to "#333")
 * repeat   -> background-repeat  (default to "no-repeat")
 * height   -> height              (default to "450px")
```

#### Site level hero

The hero configration can also be added in `_config.yml` to config it as site level.

You can use an array, but only the **last one** will be used.

```text
hero:
  - image: http://7fva40.com1.z0.glb.clouddn.com/wheatfield-under-thunderclouds.jpg
    height: 350px
  - image: http://7fva40.com1.z0.glb.clouddn.com/starry-night.jpg
    height: 150px
```

#### Table of content(TOC)

If TOC is enabled, a TOC block is displayed besides the post itself **if the screen width is large enough**.

TOC is turned off by default. To enable TOC, add `toc: true` in your `_config.yml`. In this situation, every post page will contain a TOC. But you can turn it off for a individual post by explicitly set `toc: false` in the frontmatter. If TOC is not turned on in `_config.yml`, you still can enable TOC for a individual post by explicitly set `toc: true` in the frontmatter.

#### authors avatar

in `_config.yml`:

```yaml
authors:
  haishanh:
    name: Haishan
    avatar: https://avatars0.githubusercontent.com/u/1166872?v=3
  octocat:
    name: The Octocat
    avatar: https://avatars0.githubusercontent.com/u/583231?v=3
```

### Customization

Install requirements first.

```sh
cd themes/zxcvb
npm install
```

The CSS is built from sass(scss). To build it, run:

```sh
gulp sass
```

**Note**: After you add more menu in the `_config.yml`, you should update the value `$menu-num` in `source/_scss/_var.scss` accordingly. If not, the dropdown menu (only on moblie screen) may not display properly.

### What is missing

Since I only built this theme for myself. There are some features I don't need and currently not implemented.

 * photo layout/post
 * link layout/post
