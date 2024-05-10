import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schema from './schema/index'

export default defineConfig({
  name: 'cutting-edge-transport',
  title: 'CuttingEdge Transport',

  projectId: 'k327d7rs',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schema,
  },
})
