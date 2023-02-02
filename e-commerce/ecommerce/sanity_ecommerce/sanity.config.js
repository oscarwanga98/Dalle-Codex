import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanity_ecommerce',

  projectId: '607u7a2r',
  dataset: 'sanity_ecommerce',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
