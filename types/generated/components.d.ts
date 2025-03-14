import type { Attribute, Schema } from '@strapi/strapi';

export interface BlockBlock extends Schema.Component {
  collectionName: 'components_block_blocks';
  info: {
    displayName: 'Block';
  };
  attributes: {
    heading: Attribute.Text;
    images: Attribute.Component<'custom-image.custom-image', true>;
    paragraph: Attribute.Blocks;
    subheading: Attribute.Text;
  };
}

export interface CustomImageCustomImage extends Schema.Component {
  collectionName: 'components_custom_image_custom_images';
  info: {
    displayName: 'CustomImage';
  };
  attributes: {
    caption: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GalleryGallery extends Schema.Component {
  collectionName: 'components_gallery_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {};
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.Text;
  };
}

export interface IntroductionIntroduction extends Schema.Component {
  collectionName: 'components_introduction_introductions';
  info: {
    displayName: 'Introduction';
  };
  attributes: {
    description: Attribute.Blocks;
    lowerImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.Text;
    upperImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SpaceSpace extends Schema.Component {
  collectionName: 'components_space_spaces';
  info: {
    displayName: 'Space';
  };
  attributes: {
    lowerImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    upperImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface StoryStory extends Schema.Component {
  collectionName: 'components_story_stories';
  info: {
    displayName: 'Story';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.block': BlockBlock;
      'custom-image.custom-image': CustomImageCustomImage;
      'gallery.gallery': GalleryGallery;
      'hero.hero': HeroHero;
      'introduction.introduction': IntroductionIntroduction;
      'space.space': SpaceSpace;
      'story.story': StoryStory;
    }
  }
}
