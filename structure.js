const structure = {
  id: 353,
  uniform_type: "jersey", // material.name
  material_type: "upper", // material.type
  brand_style_name: "SAMPLE",
  front_thumbnail: "https://qx7.s3.us-west-2.amazonaws.com/uploaded_files/qx7/7b2db00316b47e533f6f7bd432781e0c.png",
  left_thumbnail: "https://qx7.s3.us-west-2.amazonaws.com/uploaded_files/qx7/15d068f01446c9745767fea171accf5e.png",
  product_name: "sample product name",
  price_item: "SAMPLECODEFORITEM123",
  estimated_shipping_date: "08-27-2024",
  product_line_name: "Flash",
  "filter_flags": {
    "Neck Cut": "Hoodie",
    "Sleeve Length": "Long Sleeve",
    "Pockets": "Pocketed",
    "all_filter_flags": [
      "Hoodie",
      "Long Sleeve",
      "Pocketed"
    ]
  },
  "application_type": "Sublimation",
  "style_category": "Top",
  pricing: {
    msrp: {
      Youth: 53.33,
      Adult: 55.56,
      lowest_price: 53.33
    }
  },
  genders: [
    {
      id: 1,
      gender: "Women",
      gender_category: "Adult"
    },
    {
      id: 2,
      gender: "Girls",
      gender_category: "Youth"
    }
  ],
  // from brand_style.body_part_color_groups
  theme_color_settings: [
    {
      "code": "B",
      "default_color": "Black",
      "parts": ["back_panel", "front_body", "arm_cuff"]
    },
    {
      "code": "R",
      "default_color": "Red",
      "parts": ["collar", "stripe_1", "stripe_3", "piping_2"]
    },
    {
      "code": "W",
      "default_color": "White",
      "parts": ["stripe_2", "piping_1"]
    }
  ],
  // from material_options get name and material_option_path where perspective === front && get name and material_option_path where perspective === left 
  uniform: {
    front: [
      {
        name: "stripe_1",
        link: "https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/production/php5fPhCP.png"
      },
      {
        name: "piping_2",
        link: "https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/production/phpCt2bm7.png"
      },
      {
        name: "arm_cuff",
        link: "https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/production/phpWfbj0X.png"
      },
      {
        name: "piping_1",
        link: "https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/production/phpbRavkn.png"
      },
      {
        name: "front_body",
        link: "https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/production/phpHYIxM6.png"
      },
      {
        name: "back_panel",
        link: "https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/production/php8qJb4l.png"
      },
      {
        name: "collar",
        link: "https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/production/php6vpjhs.png"
      },
      {
        name: "shadows",
        link: "https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/production/phpHpq74z.png"
      },
      {
        name: "highlights",
        link: "https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/production/phpQgxbTp.png"
      }
    ],
    left: [
      {
        name: "stripe_1",
        link: "https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/production/php5fPhCP.png"
      },
      {
        name: "piping_2",
        link: "https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/production/phpCt2bm7.png"
      },
      {
        name: "arm_cuff",
        link: "https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/production/phpWfbj0X.png"
      },
      {
        name: "piping_1",
        link: "https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/production/phpbRavkn.png"
      },
      {
        name: "front_body",
        link: "https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/production/phpHYIxM6.png"
      },
      {
        name: "back_panel",
        link: "https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/production/php8qJb4l.png"
      },
      {
        name: "collar",
        link: "https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/production/php6vpjhs.png"
      },
      {
        name: "shadows",
        link: "https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/production/phpHpq74z.png"
      },
      {
        name: "highlights",
        link: "https://s3.us-west-2.amazonaws.com/uniformbuilder/materials/production/phpQgxbTp.png"
      }
    ]
  },
  // di na kasama
  uniform_information: [
    {
      body_part_group: "Front Body", // default_applications.body_part_group
      font_name: "Combat Stencil NEW", // default_applications.application_data.font
      text_value: "BAKERS", // default_applications.application_data.default_text
      text_shape: "straight", // default_applications.application_data.textshape
      position: "Center Front Team Name", // default_application.application_data.application_location
      scale: "3" // default_application.application_data.application_size
    },
    {
      body_part_group: "Left Body", // default_applications.body_part_group
      font_name: "Combat Stencil NEW", // default_applications.application_data.font
      text_value: "BAKERS", // default_applications.application_data.default_text
      text_shape: "straight", // default_applications.application_data.textshape
      position: "Center Front Team Name", // default_application.application_data.application_location
      scale: "3" // default_application.application_data.application_size
    }
  ],
  brand_logo: {
    link: "https://s3.us-west-2.amazonaws.com/qx7/uploaded_files/master_trims/20230803140846/pupJTi4WMr.png"
  },
  // di na kasama
  canvas_size: {
    width: 250,
    height: 450
  },
  body_part_color_groups: "",
  default_applications: "",
  default_style_category: "",
  brand_trims: "",
  default_patterns: ""
}
