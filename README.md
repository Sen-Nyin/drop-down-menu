# JS Dropdown Menu

## Intro

Designed as part of The Odin Project's Full Stack Javascript path, for the interactive module.

## Use

Put the JS file in your source directory and remember to import it into your main js file.

The javascript uses the dataset to select elements so you will need to add these datasets into your HTML.

The datasets in question are:

- data-navbar
- data-dropdown
- data-dropdown-button
- data-dropdown-expanded (boolean)

## data-navbar

You need to add this dataset entry to your parent nav element. Which could be your `<ul>` or `<div>`. This will also work on their parent, if you're using `<nav>`.

```html
<nav>
  <ul role="list" data-navbar></ul>
</nav>
```

If you want to have further drop down menu's that appear from within one of your subnavs, you should also include it there.

```html
<nav>
  <ul role="list" data-navbar>
    <li>
      <a>This is a dropdown</a>
      <ul role="list" data-navbar></ul>
    </li>
  </ul>
</nav>
```

## data-dropdown-button

Enter this dataset on the `anchor` or `button` element that you will click to trigger the dropdown activity.

```html
<nav>
    <ul role="list" data-navbar>
        <li>
            <a data-dropdown-button>This is a dropdown</a>
            <ul role='list' data-navbar>

            </ul>
    </ul>
</nav
```

## data-dropdown

The `data-dropdown` dataset must be entered on the element that is to be hidden.

```html
<nav>
  <ul role="list" data-navbar>
    <li>
      <a>This is a dropdown</a>
      <ul role="list" data-navbar data-dropdown></ul>
    </li>
  </ul>
</nav>
```

## data-dropdown-expanded

This should be tntered on the element to be hidden. By default, set its value to false.

```html
<nav>
  <ul role="list" data-navbar>
    <li>
      <a data-dropdown-button>This is a dropdown</a>
      <ul
        role="list"
        data-navbar
        data-dropdown
        data-dropdown-expanded="false"
      ></ul>
    </li>
  </ul>
</nav>
```

## CSS

Whilst I have not provided CSS for styling your nav, there is some CSS that I must provide to get this working. So put the below in your CSS file:

```css
[data-dropdown] {
  position: relative;
}

[data-dropdown-menu] {
  position: absolute;
}

[data-dropdown-expanded='true'] {
  opacity: 1;
  height: max-content;
}

[data-dropdown-expanded='false'] {
  opacity: 0;
  pointer-events: none;
}
```

From this point you can choose to add whatever animation or styling that you wish.

## Adding multiple sub menues to a single button

This is quite simply done. Simply wrap your sub menu's in a div and apply the datasets to it that were previously applied to your submenu:

```html
<nav>
  <ul role="list" data-navbar>
    <li>
      <a data-dropdown-button>This is a dropdown</a>
      <div data-dropdown data-dropdown-expanded="false">
        <ul role="list" data-navbar></ul>
        <ul role="list" data-navbar></ul>
        <ul role="list" data-navbar></ul>
        <ul role="list" data-navbar></ul>
      </div>
    </li>
  </ul>
</nav>
```

This will of course affect your styling so you'll need to develop a new class to display these properly.
