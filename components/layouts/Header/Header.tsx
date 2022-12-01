import React from "react"
import { Navbar, Button, Link, Text, Input } from "@nextui-org/react"

export default function Header({}) {
  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          ACME
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Input placeholder="Next UI" css={{ width: "50vw" }} />
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit">Login</Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link}>
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  )
}
