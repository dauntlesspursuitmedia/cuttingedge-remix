import {getCliClient} from 'sanity/cli'

const client = getCliClient()
const {projectId} = client.config()
const pathname = `projects/${projectId}/tokens`
const tokenName = 'Preview'

type TokenResponse = {
  key: string
  label: string
  roleName: string
  projectUserId: string
  createdAt: string
  roles: {
    name: string
    title: string
  }[]
}

async function create() {
  const rootDirectory = process.argv
    .find((arg) => arg.startsWith('--root='))
    ?.split('=')[1]

  if (!rootDirectory) {
    throw new Error('rootDirectory not found')
  }

  const currentTokens = await client.request<TokenResponse[]>({
    uri: pathname,
    method: 'get',
  })

  if (
    currentTokens.length > 0 &&
    currentTokens.find((t) => t.label === tokenName)
  ) {
    console.log(
      'Token already exists. You will need to manually update the .env file to use it.',
    )
    return
  }

  const {key: token} = await client.request<{key: string}>({
    uri: pathname,
    method: 'post',
    body: {
      label: tokenName,
      roleName: 'viewer',
    },
  })

  if (!token) {
    throw new Error('No token in response')
  }

  // Write key to .env
  const envPath = `${rootDirectory}/.env`
  const env = require('fs').readFileSync(envPath, 'utf8')
  require('fs').writeFileSync(envPath, `${env}SANITY_READ_TOKEN="${token}"\n`)
}

create()
