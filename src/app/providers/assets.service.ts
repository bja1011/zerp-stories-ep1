import { Injectable } from '@angular/core';
// @ts-ignore
import { default as assets } from '../../assets.json';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor() {
    // temporary delete default property. @todo: check why this property is creating
    // delete this.assetsData.default;
  }

  /**
   * * Get asset by asset path.
   *
   * Return file asset path for passed asset path.
   * @param assetPath Path for asset.
   */
  getAsset(assetPath: string): string {
    // console.log(assetPath)
    // console.log(assets);
    // return this.assetsData[`/assets/${assetPath}`] ? this.assetsData[`/assets/${assetPath}`] : 'no-asset-' + assetPath;
    return environment.base + assets[`/assets/${assetPath}`];
  }

  // /**
  //  * Find assets by directory name.
  //  *
  //  * Return assets from passed directory name. Search only first level of directory tree.
  //  * @param {string} directory
  //  * @returns {object}
  //  */
  // getAssetsByDirectory(directory: string): object {
  //   const assetsObject = {};
  //   Object.entries(this.assetsData).forEach(asset => {
  //     if (asset[0].split('/').indexOf(directory) === 2) {
  //       assetsObject[asset[0]] = asset[1];
  //     }
  //   });
  //   return assetsObject;
  // }
  //
  // getAssetFilename(assetPath: string) {
  //   return assetPath.split('/').pop();
  // }
  //
  // /**
  //  * Get asset by filename part.
  //  * Primary used for searching building image knowing only group and level that is first part of file name.
  //  * @param filenamePart
  //  * @param path
  //  */
  // getAssetByFilenamePart(filenamePart: string, path: string = '') {
  //   const assetPath = `/assets/${path}${filenamePart}`;
  //   const assetKey = Object.keys(this.assetsData).find(assetKey => {
  //     return this.assetsData[assetKey].includes(assetPath);
  //   });
  //   if (assetKey) {
  //     return environment.base + this.assetsData[assetKey];
  //   }
  // }

  // /**
  //  * Get assets by filename part.
  //  * Primary used for searching building image versions.
  //  * @param filenamePart
  //  * @param path
  //  */
  // getAssetsByFilenamePart(filenamePart: string, path: string = '') {
  //   const assetPath = `/assets/${path}${filenamePart}`;
  //   const assets = [];
  //   Object.keys(this.assetsData).forEach(assetKey => {
  //     if (this.assetsData[assetKey].includes(assetPath)) {
  //       assets.push(this.assetsData[assetKey]);
  //     }
  //   });
  //   return assets.length ? assets : null;
  // }

  // /**
  //  * Find all texture atlases and return .
  //  *
  //  * Get Phaser Cache JSON entries and search for a `textures` key.
  //  * If key exists it means that its texture atlas (can be multitexture if key container more than one element.
  //  * For now method handle only single texture atlas.
  //  * @return ImagesAtlas[]
  //  */
  // getAtlasFromCache(game: Phaser.Game): gameInterfaces.ImagesAtlas[] {
  //   const atlasKey = game.cache.getKeys(Phaser.Cache.TEXTURE_ATLAS);
  //   const atlases: gameInterfaces.ImagesAtlas[] = [];
  //   // for (const key in entries) {
  //   //
  //   //   if (entries[key].hasOwnProperty('textures')) {
  //   //
  //   //     const textures: string[] = [];
  //   //
  //   //     for (const frameName in entries[key].textures['0'].frames) {
  //   //       textures.push(entries[key].textures['0'].frames[frameName].filename);
  //   //     }
  //   //
  //   //     atlases.push({
  //   //       name: key,
  //   //       images: textures
  //   //     });
  //   //   }
  //   // }
  //
  //   return atlases;
  // }
}
