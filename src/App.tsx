import { Button } from "@/components/ui/button"
import { HStack } from "@chakra-ui/react"

function App() {
  
  return (
    <HStack>
      <Button color={'teal'} variant='outline'>Click me</Button>
      <Button>Click me</Button>
    </HStack>
  )
}

export default App
