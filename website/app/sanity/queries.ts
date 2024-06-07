import groq from "groq";

export const IMAGE_QUERY = groq`
    crop {
        bottom,
        left,
        right,
        top
    },
    hotspot {
        height,
        width,
        x,
        y
    },
    asset->{
        _ref,
        _id,
        assetId,
        metadata {
            lqip,
        },
}
`;
export const SERVICES_QUERY = groq`
    *[_type == "service"] {
        _type,
        _id,
        title,
        "slug": slug.current,
        description {
            _type,
            content[]
        },
        category,
        image,
        _createdAt,
        _updatedAt,
        _rev,
    }
`;

export const SITE_CONFIG_QUERY = groq`
	*[_type == "siteConfig"][0]{
		title,
        _type,
		url,
        logo {
            ${IMAGE_QUERY}
        },
		socialLinks[]{
			_key,
			platform,
			url
		},
		mainNavigation[]{
			_id,
			_key,
			itemName,
			externalLink,
			item->{
				_id,
				title,
				_type,
				"slug":slug.current
			},
			nestedRoutes[]{
				_key,
				itemName,
				externalLink,
				item->{
					_id,
					_type,
					title,
					"slug":slug.current
				}
			}
		},
	}
`;
