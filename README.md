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

### What is missing

Since I only built this theme for myself. There are some features I don't need and currently not implemented.

 * categories
 * tags
 * photo layout/post
 * link layout/post


[hexo]: https://hexo.io