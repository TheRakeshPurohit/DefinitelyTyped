import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import IGBCAdsPermission from "./igbc-ads-permission";
import BrandedContentShadowIGUserID from "./branded-content-shadow-ig-user-id";
import ThreadsUser from "./threads-user";
import Dataset from "./dataset";
import IGMedia from "./ig-media";
import IGShoppingProductAppeal from "./ig-shopping-product-appeal";
/**
 * IGUser
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUser extends AbstractCrudObject {
    static get Fields(): Readonly<{
        biography: "biography";
        business_discovery: "business_discovery";
        followers_count: "followers_count";
        follows_count: "follows_count";
        has_profile_pic: "has_profile_pic";
        id: "id";
        ig_id: "ig_id";
        is_published: "is_published";
        legacy_instagram_user_id: "legacy_instagram_user_id";
        media_count: "media_count";
        mentioned_comment: "mentioned_comment";
        mentioned_media: "mentioned_media";
        name: "name";
        owner_business: "owner_business";
        profile_picture_url: "profile_picture_url";
        shopping_product_tag_eligibility: "shopping_product_tag_eligibility";
        shopping_review_status: "shopping_review_status";
        username: "username";
        website: "website";
    }>;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAuthorizedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAuthorizedAdAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGUser>;
    getAvailableCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getBrandedContentAdPermissions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createBrandedContentAdPermission(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGBCAdsPermission>;
    getBrandedContentAdvertisableMedias(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteBrandedContentTagApproval(params?: Record<string, any>): Promise<any>;
    getBrandedContentTagApproval(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createBrandedContentTagApproval(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BrandedContentShadowIGUserID>;
    getCatalogProductSearch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getConnectedThreadsUser(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getContentPublishingLimit(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getDataset(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createDataset(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Dataset>;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInstagramBackedThreadsUser(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createInstagramBackedThreadsUser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ThreadsUser>;
    getLiveMedia(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getMedia(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createMedia(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGMedia>;
    createMediaPublish(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGMedia>;
    createMention(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getNotificationMessageTokens(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getProductAppeal(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProductAppeal(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGShoppingProductAppeal>;
    getRecentlySearchedHashtags(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getStories(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTags(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getUpcomingEvents(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createUpcomingEvent(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<IGUser>;
}
