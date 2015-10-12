Images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images", {path: "~/uploads/images"})],
    filter: {
        allow: {
            contentTypes: ['image/*'] //allow only images in this FS.Collection
        }
    }
});
Images.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
})