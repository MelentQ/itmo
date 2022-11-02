import { Fancybox} from "@fancyapps/ui";

export default function fancyboxVideo() {
    Fancybox.bind("[data-fancybox]", {
        Html: {
            video: {
              autoplay: false,
            },
          },
    })
}

