<template>
  <div class="max-w-screen-md mx-auto">
    <Nuxt />

    <div class="fixed top-0 left-0 w-screen h-screen overflow-hidden -z-1">
      <div class="stars" />
      <div class="stars2" />
      <div class="stars3" />
    </div>
  </div>
</template>

<style lang="scss">
body {
  @apply min-h-screen bg-purple-dark flex items-center justify-center;
}

// star animate
@function multiple-box-shadow($n) {
  $value: "#{random(2000)}px #{random(2000)}px #FFF";

  @for $i from 2 through $n {
    $value: "#{$value} , #{random(2000)}px #{random(2000)}px #FFF";
  }

  @return unquote($value);
}

$shadows-small: multiple-box-shadow(700);
$shadows-medium: multiple-box-shadow(200);
$shadows-big: multiple-box-shadow(100);

.stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: $shadows-small;
  animation: animStar 50s linear infinite;

  &:after {
    content: "";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: $shadows-small;
  }
}

.stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: $shadows-medium;
  animation: animStar 100s linear infinite;

  &:after {
    content: "";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: $shadows-medium;
  }
}

.stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: $shadows-big;
  animation: animStar 150s linear infinite;

  &:after {
    content: "";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: $shadows-big;
  }
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}
</style>
