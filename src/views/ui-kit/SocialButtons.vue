<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Social buttons"
      description="Display links to your social network accounts with social icon buttons."
      :is-silicon-component="true"
    />

    <!-- Solid buttons -->
    <section id="sb-solid" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Solid buttons</h2>
      <div class="pt-1">
        <div class="d-flex flex-wrap">
          <a
            href="#"
            class="btn btn-icon btn-secondary me-2 my-1"
            v-for="(item, idx) in iconData"
            :key="idx"
            :class="'btn-' + item.btn"
          >
            <Icon :icon="item.icon"></Icon>
          </a>
        </div>
      </div>
    </section>

    <section id="sb-outline" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Outline buttons</h2>
      <div class="pt-1">
        <div class="d-flex flex-wrap">
          <a
            href="#"
            class="btn btn-icon btn-outline-secondary me-2 my-1"
            v-for="(item, idx) in iconData"
            :key="idx"
            :class="'btn-' + item.btn"
          >
            <Icon :icon="item.icon"></Icon>
          </a>
        </div>
      </div>
    </section>

    <!-- Shape -->
    <section id="sb-shape" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Shape</h2>
      <div class="pt-1">
        <a
          href="#"
          class="btn btn-icon btn-secondary btn-dribbble rounded-0 me-2 my-1"
          aria-label="Dribbble"
        >
          <Icon :icon="DribbleIcon"></Icon>
        </a>
        <a href="#" class="btn btn-icon btn-secondary btn-dribbble me-2 my-1" aria-label="Dribbble">
          <Icon :icon="DribbleIcon"></Icon>
        </a>
        <a
          href="#"
          class="btn btn-icon btn-secondary btn-dribbble rounded-circle my-1"
          aria-label="Dribbble"
        >
          <Icon :icon="DribbleIcon"></Icon>
        </a>
        <div class="pt-2"></div>
        <a
          href="#"
          class="btn btn-icon btn-outline-secondary btn-skype rounded-0 me-2 my-1"
          aria-label="Skype"
        >
          <Icon :icon="SkypeIcon"></Icon>
        </a>
        <a
          href="#"
          class="btn btn-icon btn-outline-secondary btn-skype me-2 my-1"
          aria-label="Skype"
        >
          <Icon :icon="SkypeIcon"></Icon>
        </a>
        <a
          href="#"
          class="btn btn-icon btn-outline-secondary btn-skype rounded-circle my-1"
          aria-label="Skype"
        >
          <Icon :icon="SkypeIcon"></Icon>
        </a>
      </div>
    </section>

    <!-- Sizing -->
    <section id="sb-sizing" class="pt-5 ps-lg-2 ps-xxl-0">
      <h2 class="h4">Sizing</h2>
      <div class="pt-1">
        <a
          href="#"
          class="btn btn-icon btn-secondary btn-linkedin btn-lg me-2 my-1"
          aria-label="LinkedIn"
        >
          <Icon :icon="LinkedinIcon"></Icon>
        </a>
        <a href="#" class="btn btn-icon btn-secondary btn-linkedin me-2 my-1" aria-label="LinkedIn">
          <Icon :icon="LinkedinIcon"></Icon>
        </a>
        <a
          href="#"
          class="btn btn-icon btn-secondary btn-linkedin btn-sm my-1"
          aria-label="LinkedIn"
        >
          <Icon :icon="LinkedinIcon"></Icon>
        </a>
        <div class="pt-2"></div>
        <a
          href="#"
          class="btn btn-icon btn-outline-secondary btn-twitch btn-lg me-2 my-1"
          aria-label="Twitch"
        >
          <Icon :icon="TwitchIcon"></Icon>
        </a>
        <a
          href="#"
          class="btn btn-icon btn-outline-secondary btn-twitch me-2 my-1"
          aria-label="Twitch"
        >
          <Icon :icon="TwitchIcon"></Icon>
        </a>
        <a
          href="#"
          class="btn btn-icon btn-outline-secondary btn-twitch btn-sm my-1"
          aria-label="Twitch"
        >
          <Icon :icon="TwitchIcon"></Icon>
        </a>
      </div>
    </section>
    <template v-slot:anchor-navigation>
      <AnchorNavigation :elements="anchorData" />
    </template>
  </UIKitLayout>
</template>

<script lang="ts" setup>
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import { Icon } from '@iconify/vue'
import type { IconifyIcon } from '@iconify/vue'

import LinkedinIcon from '@iconify/icons-bx/bxl-linkedin'
import TiktokIcon from '@iconify/icons-bx/bxl-tiktok'
import PinterestAltIcon from '@iconify/icons-bx/bxl-pinterest-alt'
import Vimeo from '@iconify/icons-bx/bxl-vimeo'
import RedditIcon from '@iconify/icons-bx/bxl-reddit'
import DiscordAltIcon from '@iconify/icons-bx/bxl-discord-alt'
import SlackIcon from '@iconify/icons-bx/bxl-slack'
import TelegramIcon from '@iconify/icons-bx/bxl-telegram'
import SkypeIcon from '@iconify/icons-bx/bxl-skype'
import WhatsappIcon from '@iconify/icons-bx/bxl-whatsapp'
import MessengerIcon from '@iconify/icons-bx/bxl-messenger'
import VkIcon from '@iconify/icons-bx/bxl-vk'
import RuIcon from '@iconify/icons-bx/bxl-ok-ru'
import GoogleIcon from '@iconify/icons-bx/bxl-google'
import TumblrIcon from '@iconify/icons-bx/bxl-tumblr'
import MediumIcon from '@iconify/icons-bx/bxl-medium'
import SnapchatIcon from '@iconify/icons-bx/bxl-snapchat'
import BloggerIcon from '@iconify/icons-bx/bxl-blogger'
import TwitchIcon from '@iconify/icons-bx/bxl-twitch'
import FlickrIcon from '@iconify/icons-bx/bxl-flickr'
import GitlabICon from '@iconify/icons-bx/bxl-gitlab'
import CodepenIcon from '@iconify/icons-bx/bxl-codepen'
import DropboxIcon from '@iconify/icons-bx/bxl-dropbox'
import ZoomIcon from '@iconify/icons-bx/bxl-zoom'
import SteamIcon from '@iconify/icons-bx/bxl-steam'
import PatreonIcon from '@iconify/icons-bx/bxl-patreon'
import ProductHuntIcon from '@iconify/icons-bx/bxl-product-hunt'
import KickstarterIcon from '@iconify/icons-bx/bxl-kickstarter'
import AirbnbIcon from '@iconify/icons-bx/bxl-airbnb'
import FoursquareIcon from '@iconify/icons-bx/bxl-foursquare'
import TripadvisorIcon from '@iconify/icons-bx/bxl-trip-advisor'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
import TwitterIcon from '@iconify/icons-bx/bxl-twitter'
import YoutubeIcon from '@iconify/icons-bx/bxl-youtube'
import BehanceIcon from '@iconify/icons-bx/bxl-behance'
import DribbleIcon from '@iconify/icons-bx/bxl-dribbble'
import GithubIcon from '@iconify/icons-bx/bxl-github'
import StackOverflowIcon from '@iconify/icons-bx/bxl-stack-overflow'

import AnchorNavigation from '@/components/AnchorNavigation.vue'

type SizingBtnType = {
  icon: IconifyIcon
  btn: string
}

const iconData: SizingBtnType[] = [
  {
    icon: FacebookIcon,
    btn: 'facebook'
  },
  {
    icon: TwitterIcon,
    btn: 'twitter'
  },
  {
    icon: InstagramIcon,
    btn: 'instagram'
  },
  {
    icon: TiktokIcon,
    btn: 'tiktok'
  },
  {
    icon: YoutubeIcon,
    btn: 'youtube'
  },
  {
    icon: LinkedinIcon,
    btn: 'linkedin'
  },
  {
    icon: PinterestAltIcon,
    btn: 'pinterest'
  },
  {
    icon: BehanceIcon,
    btn: 'behance'
  },
  {
    icon: DribbleIcon,
    btn: 'dribbble'
  },
  {
    icon: Vimeo,
    btn: 'vimeo'
  },
  {
    icon: RedditIcon,
    btn: 'reddit'
  },
  {
    icon: DiscordAltIcon,
    btn: 'discord'
  },
  {
    icon: SlackIcon,
    btn: 'slack'
  },
  {
    icon: TelegramIcon,
    btn: 'telegram'
  },
  {
    icon: SkypeIcon,
    btn: 'skype'
  },
  {
    icon: WhatsappIcon,
    btn: 'whatsapp'
  },
  {
    icon: MessengerIcon,
    btn: 'messenger'
  },
  {
    icon: VkIcon,
    btn: 'vk'
  },
  {
    icon: RuIcon,
    btn: 'ru'
  },
  {
    icon: GoogleIcon,
    btn: 'google'
  },
  {
    icon: TumblrIcon,
    btn: 'tumblr'
  },
  {
    icon: MediumIcon,
    btn: 'medium'
  },
  {
    icon: SnapchatIcon,
    btn: 'snapchat'
  },
  {
    icon: BloggerIcon,
    btn: 'blogger'
  },
  {
    icon: TwitchIcon,
    btn: 'twitch'
  },
  {
    icon: FlickrIcon,
    btn: 'flickr'
  },
  {
    icon: StackOverflowIcon,
    btn: 'stack-overflow'
  },
  {
    icon: GithubIcon,
    btn: 'github'
  },
  {
    icon: GitlabICon,
    btn: 'gitlab'
  },
  {
    icon: CodepenIcon,
    btn: 'codepen'
  },
  {
    icon: DropboxIcon,
    btn: 'dropbox'
  },
  {
    icon: ZoomIcon,
    btn: 'zoom'
  },
  {
    icon: SteamIcon,
    btn: 'steam'
  },
  {
    icon: PatreonIcon,
    btn: 'patreon'
  },
  {
    icon: ProductHuntIcon,
    btn: 'product-hunt'
  },
  {
    icon: KickstarterIcon,
    btn: 'kickstarter'
  },
  {
    icon: AirbnbIcon,
    btn: 'airbnb'
  },
  {
    icon: FoursquareIcon,
    btn: 'foursquare'
  },
  {
    icon: TripadvisorIcon,
    btn: 'trip-advisor'
  }
]

const anchorData = [
  {
    id: 'sb-solid',
    title: 'Solid buttons'
  },
  {
    id: 'sb-outline',
    title: 'Outline buttons'
  },
  {
    id: 'sb-shape',
    title: 'Shape'
  },
  {
    id: 'sb-sizing',
    title: 'Sizing'
  }
]
</script>
