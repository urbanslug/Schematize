import { types } from "mobx-state-tree";

export const RootStore = types
    .model({
        useVerticalCompression: false,
        beginBin: 1,
        endBin: 200,
        pixelsPerColumn:6,
        pixelsPerRow: 4,
        pixelsBetween:5,
        leftOffset:25,
        topOffset: 400,
        highlightedLink: 0, // we will compare linkColumns
        maximumHeightThisFrame: 150,
        toolTipContents: ''
    })
    .actions(self => {
        function updateTopOffset(newTopOffset) {
            self.topOffset = newTopOffset;
        }
        function updateHighlightedLink(linkRect) {
            self.highlightedLink = linkRect
        }
        function updateMaxHeight(latestHeight){
            self.maximumHeightThisFrame = Math.max(self.maximumHeightThisFrame, latestHeight);
        }
        function resetRenderStats(){
            self.maximumHeightThisFrame = 1;
        }
        function updateTooltip(newContents){
            self.toolTipContents = String(newContents)
        }

        return {
            updateTopOffset,
            updateHighlightedLink,
            updateMaxHeight,
            resetRenderStats,
            updateTooltip
        }
    })
    .views(self => ({
    }));

export const store = RootStore.create({

});

