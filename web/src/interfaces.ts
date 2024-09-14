export interface IEvents {
    _id:                 string;
    id:                  string;
    uuid:                string;
    title:               string;
    displayed_location:  null;
    thumbnail_url:       string;
    url:                 string;
    is_online:           boolean;
    themes:              any[];
    organization_name:   null;
    starts_at:           string;
    ends_at:             string;
    registrations_count: number;
    portal:              string;
}