import React from "react"
import {
  Navbar,
  Button,
  Link,
  Text,
  Input,
  Badge,
  Avatar,
  Dropdown,
  Loading,
  User,
  Grid,
} from "@nextui-org/react"

export default function Header({}) {
  const login: boolean = true
  return (
    <Navbar variant="sticky" maxWidth="fluid">
      <Navbar.Brand
        css={{
          w: "25%",
        }}
      >
        <Link href="/componsntsTest">
          <svg
            className=""
            fill="none"
            height="36"
            viewBox="0 0 32 32"
            width="36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="var(--secondary)" height="100%" rx="16" width="100%" />
            <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <Text b color="inherit" hideIn="xs">
            Testα
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Input
          id="selectbox"
          placeholder="search"
          css={{ width: "30vw" }}
          contentRight={<Loading size="xs" />}
        />
      </Navbar.Content>
      <Navbar.Content
        css={{
          w: "25%",
          jc: "flex-end",
        }}
      >
        {(() => {
          if (!login) {
            return (
              <Navbar.Item>
                <Button auto flat as={Link}>
                  Sign Up
                </Button>
              </Navbar.Item>
            )
          } else {
            return (
              <>
                <Navbar.Item hideIn="sm">
                  <Dropdown>
                    <Dropdown.Button color="secondary" light>
                      作成
                    </Dropdown.Button>
                    <Dropdown.Menu
                      color="secondary"
                      variant="light"
                      aria-label="Actions"
                    >
                      <Dropdown.Item key="new">New file</Dropdown.Item>
                      <Dropdown.Item key="copy">Copy link</Dropdown.Item>
                      <Dropdown.Item key="edit">Edit file</Dropdown.Item>
                      <Dropdown.Item key="delete" color="error" withDivider>
                        Delete file
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Navbar.Item>
                <Navbar.Item hideIn="sm">
                  <Dropdown placement="bottom-right">
                    <Dropdown.Trigger>notification</Dropdown.Trigger>
                    <Dropdown.Menu
                      color="secondary"
                      aria-label="Avatar Actions"
                      css={{ width: "$1000" }}
                    >
                      <Dropdown.Section title="notification">
                        <Dropdown.Item
                          key="nice[1]"
                          css={{ height: "auto", py: 10 }}
                        >
                          <Grid.Container
                            gap={2}
                            justify="flex-start"
                            css={{ height: "auto" }}
                          >
                            <Avatar
                              size="sm"
                              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                              zoomed
                            />
                            <Text
                              css={{
                                width: 150,
                                mx: 10,
                                fontSize: 12,
                              }}
                            >
                              あｓｄさんが「あｓｄふぁｓｄふぁｓｄふぁｓｄｆ」をいいねしました
                            </Text>
                          </Grid.Container>
                        </Dropdown.Item>
                        <Dropdown.Item
                          key="nice[2]"
                          css={{ height: "auto", py: 10 }}
                        >
                          <Grid.Container
                            gap={2}
                            justify="flex-start"
                            css={{ height: "auto" }}
                          >
                            <Avatar
                              size="sm"
                              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                              zoomed
                            />
                            <Text
                              css={{
                                width: 150,
                                mx: 10,
                                fontSize: 12,
                              }}
                            >
                              あｓｄさんが「あｓｄふぁｓｄふぁｓｄふぁｓｄｆ」をいいねしました
                            </Text>
                          </Grid.Container>
                        </Dropdown.Item>
                        <Dropdown.Item
                          key="nice[3]"
                          css={{ height: "auto", py: 10 }}
                        >
                          <Grid.Container
                            gap={2}
                            justify="flex-start"
                            css={{ height: "auto" }}
                          >
                            <Avatar
                              size="sm"
                              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                              zoomed
                            />
                            <Text
                              css={{
                                width: 150,
                                mx: 10,
                                fontSize: 12,
                              }}
                            >
                              あｓｄさんが「あｓｄふぁｓｄふぁｓｄふぁｓｄｆ」をいいねしました
                            </Text>
                          </Grid.Container>
                        </Dropdown.Item>
                      </Dropdown.Section>
                    </Dropdown.Menu>
                  </Dropdown>
                </Navbar.Item>
                <Navbar.Item>
                  <Dropdown placement="bottom-left">
                    <Dropdown.Trigger>
                      <Avatar
                        bordered
                        size="lg"
                        as="button"
                        color="secondary"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                      />
                    </Dropdown.Trigger>
                    <Dropdown.Menu
                      color="secondary"
                      aria-label="Avatar Actions"
                    >
                      <Dropdown.Item key="profile" css={{ height: "$18" }}>
                        <Text b color="inherit" css={{ d: "flex" }}>
                          Signed in as
                        </Text>
                        <Text b color="inherit" css={{ d: "flex" }}>
                          zoey@example.com
                        </Text>
                      </Dropdown.Item>
                      <Dropdown.Item key="settings" withDivider>
                        My Settings
                      </Dropdown.Item>
                      <Dropdown.Item key="team_settings">
                        Team Settings
                      </Dropdown.Item>
                      <Dropdown.Item key="analytics" withDivider>
                        Analytics
                      </Dropdown.Item>
                      <Dropdown.Item key="system">System</Dropdown.Item>
                      <Dropdown.Item key="configurations">
                        Configurations
                      </Dropdown.Item>
                      <Dropdown.Item key="help_and_feedback" withDivider>
                        Help & Feedback
                      </Dropdown.Item>
                      <Dropdown.Item key="logout" color="error" withDivider>
                        Log Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Navbar.Item>
              </>
            )
          }
        })()}
      </Navbar.Content>
    </Navbar>
  )
}
