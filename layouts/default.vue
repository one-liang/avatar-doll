<template>
  <div class="py-6">
    <Nuxt class="max-w-screen-md mx-auto transform lg:-translate-y-16" />

    <div class="fixed top-0 left-0 w-screen h-screen overflow-hidden -z-1">
      <div class="dot-bg left-top" />
      <div class="dot-bg left-bot" />
      <div class="dot-bg right-bot" />
      <div class="dot-01" />
      <div class="dot-02" />
      <div class="stars" />
      <div class="stars2" />
      <div class="stars3" />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
body {
  @apply min-h-screen bg-gradient-to-r from-purple-dark to-indigo-900 flex items-center justify-center;
}

// 背景圖
.dot-bg {
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 415px;
  background-image: url("/avatar-doll/other/dot-bg.png");
  position: absolute;
  opacity: 0.5;
}

.dot-bg.left-top {
  left: 18%;
  top: -7%;
}

.dot-bg.left-bot {
  left: 11%;
  bottom: 7%;
  transform: rotate(120deg) scale(0.7);
}

.dot-bg.right-bot {
  right: 16%;
  bottom: 4%;
  transform: rotate(-180deg) scale(1.2);
}

.dot-01 {
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 80px;
  background-image: url("/avatar-doll/other/dot-01.png");
  position: absolute;
  left: 11%;
  bottom: 33%;
  opacity: 0.5;
}

.dot-02 {
  width: 100%;
  height: 100%;
  max-width: 40px;
  max-height: 40px;
  background-image: url("/avatar-doll/other/dot-02.png");
  position: absolute;
  left: 46%;
  bottom: 20%;
  opacity: 0.5;
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

.btn {
  @apply relative overflow-hidden px-4 py-2 text-xl font-black text-white border-2 border-white w-28 transition-colors duration-200 z-10 focus:outline-none;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #ffffff;
    transform-origin: center;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 0.4s ease-in-out;
  }

  &:hover {
    color: #313241;

    &::before {
      transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
    }
  }
}

// for pad
@media (max-width: 1024px) {
  // 背景圖
  .dot-bg.left-top {
    left: -3%;
    top: 2%;
    transform: scale(1);
  }

  .dot-bg.left-bot {
    display: none;
  }

  .dot-bg.right-bot {
    right: 9%;
    bottom: 0%;
    transform: rotate(-180deg) scale(1.1);
  }

  .dot-01 {
    left: 15%;
    bottom: 44%;
  }

  .dot-02 {
    left: 84%;
    bottom: 60%;
  }
}

// for pad & mobile
@media (max-width: 767.9px) {
  // 背景圖
  .dot-bg.left-top {
    left: -26%;
    top: -8%;
    transform: scale(0.6);
  }

  .dot-bg.left-bot {
    display: none;
  }

  .dot-bg.right-bot {
    display: none;
  }

  .dot-01 {
    display: none;
  }

  .dot-02 {
    display: none;
  }
}

</style>
