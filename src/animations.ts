import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element")
  const maskRect = document.getElementById('maskRect')
  const logo = document.getElementById('logo')

  if (transitionElement
    && maskRect
    && logo) {
    const tl = gsap.timeline()

    tl.set(transitionElement, {
      xPercent: 0,
    })
    .set(maskRect, {
      scaleY: 0,
      yPercent: 120,
      strokeWidth: .2
    })
    .set(logo, {
      opacity: 0
    })
    .to(
      logo, {
        scale: 1,
        top: 0,
        opacity: 1,
        duration: .65,
        ease: "power4.out",
      }
    )
    .to(
      maskRect, {
        strokeWidth: 0,
        scaleY: 1,
        yPercent: 100,
        duration: .65,
        ease: "expo.out",
      }
    )
    .to(transitionElement, {
      xPercent: 100,
      duration: 0.8,
      ease: "expo.out"
    })

  }
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const animationWrapper = document.getElementById("transition-element")
  const maskRect = document.getElementById('maskRect')
  const logo = document.getElementById('logo')

  if (animationWrapper) {
    const tl = gsap.timeline()

    tl.set(animationWrapper, {
      scaleY: 1.5,
      xPercent: -100,
      rotate: -30,
      transformOrigin: "0% 100%",
    })  
    .set(maskRect, {
      strokeWidth: 0,
      scaleY: 1,
      yPercent: 100,
      }
    )
    .set(logo, {
      scale: 1,
      opacity: 1
    })
    .to(animationWrapper, {
      xPercent: 0,
      scaleY: 1,
      duration: 0.6,
    })
    .to(
      animationWrapper,
      {
        rotate: 0,
        transformOrigin: "100% 100%",
        duration: 0.2,
      },
      "<"
    )
    .to(
      logo, {
        ease: "expo.inOut",
        duration: .65
      }
    )
    .to(maskRect, {
      scaleY: 0,
      yPercent: 120,
      strokeWidth: .2,
      duration: .65,
      ease: "expo.out",
      onComplete: () => {
        router.push(href)
      },
    })

  }
}