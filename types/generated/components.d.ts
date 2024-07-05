import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    Heading: Attribute.String;
    Description: Attribute.Text;
    Form: Attribute.Component<'ui.form'>;
  };
}

export interface BlocksHeroSection extends Schema.Component {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'HeroSection';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Link: Attribute.Component<'ui.button-link'>;
    Image: Attribute.Media<'images'>;
  };
}

export interface BlocksPricing extends Schema.Component {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    Name: Attribute.String;
    Description: Attribute.Text;
    Plan: Attribute.Component<'ui.pricing-card', true>;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Benefits Row';
    description: '';
  };
  attributes: {
    Card: Attribute.Component<'ui.card', true>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logoText: Attribute.Component<'ui.button-link'>;
    middleText: Attribute.Text;
    socialLink: Attribute.Component<'ui.button-link', true>;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logoText: Attribute.Component<'ui.button-link'>;
    ctaButton: Attribute.Component<'ui.button-link'>;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media<'images'>;
  };
}

export interface UiButtonLink extends Schema.Component {
  collectionName: 'components_ui_button_links';
  info: {
    displayName: 'Button link';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    Type: Attribute.Enumeration<['PRIMARY', 'SECONDARY', 'LINK']>;
  };
}

export interface UiCard extends Schema.Component {
  collectionName: 'components_ui_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    heading: Attribute.String;
    description: Attribute.Text;
  };
}

export interface UiForm extends Schema.Component {
  collectionName: 'components_ui_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    Header: Attribute.String;
    Description: Attribute.Text;
    Input: Attribute.Component<'ui.input', true>;
    Button: Attribute.Component<'ui.button-link'>;
  };
}

export interface UiInput extends Schema.Component {
  collectionName: 'components_ui_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    Placeholder: Attribute.String;
    Label: Attribute.String;
    inputType: Attribute.String;
  };
}

export interface UiPricingCard extends Schema.Component {
  collectionName: 'components_ui_pricing_cards';
  info: {
    displayName: 'Pricing Card';
    icon: 'chartPie';
  };
  attributes: {
    PlanTitle: Attribute.String;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    price: Attribute.Float;
    services: Attribute.Relation<
      'ui.pricing-card',
      'oneToMany',
      'api::service.service'
    >;
    link: Attribute.Component<'ui.button-link'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.cta': BlocksCta;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.pricing': BlocksPricing;
      'blocks.row': BlocksRow;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'seo.meta-data': SeoMetaData;
      'ui.button-link': UiButtonLink;
      'ui.card': UiCard;
      'ui.form': UiForm;
      'ui.input': UiInput;
      'ui.pricing-card': UiPricingCard;
    }
  }
}
