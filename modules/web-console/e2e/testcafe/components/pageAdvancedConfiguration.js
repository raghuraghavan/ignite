/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Selector, t} from 'testcafe'

export const pageAdvancedConfiguration = {
    saveButton: Selector('.pc-form-actions-panel .btn-ignite').withText('Save'),
    clusterNavButton: Selector('.pca-menu-link[ui-sref="base.configuration.edit.advanced.cluster"]'),
    modelsNavButton: Selector('.pca-menu-link[ui-sref="base.configuration.edit.advanced.models"]'),
    cachesNavButton: Selector('.pca-menu-link[ui-sref="base.configuration.edit.advanced.caches"]'),
    igfsNavButton: Selector('.pca-menu-link[ui-sref="base.configuration.edit.advanced.igfs"]'),
    async save() {
        await t.click(this.saveButton)
    }
};

export class Panel {
    constructor(title) {
        this._selector = Selector('.pca-panel-heading-title').withText(title).parent('.pca-panel');
        this.heading = this._selector.find('.pca-panel-heading')
        this.body = this._selector.find('.pca-panel-collapse').addCustomDOMProperties({
            isOpened: el => el.classList.contains('in')
        })
    }
}