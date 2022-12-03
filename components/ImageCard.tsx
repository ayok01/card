import { Card, Col, Text, Grid, Avatar, Spacer } from "@nextui-org/react"

export default function ImageCard() {
  return (
    <>
      <Card isHoverable variant="flat" css={{ mw: "184px", mh: "122px" }}>
        <Card.Image
          src="https://nextui.org/images/card-example-4.jpeg"
          objectFit="cover"
          width="100%"
          height={340}
          alt="Card image background"
        />
      </Card>
      <Text size="$md" css={{ mx: 10, mw: "184px" }}>
        [DIY] Boiling Cooling Novec PC, Making of Water-Block with Transparent
        Resin
      </Text>
      <Grid.Container
        gap={0}
        justify="flex-start"
        css={{ mx: 10, mb: 10, mw: "184px" }}
      >
        <Grid xs={1.5}>
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            size="xs"
          />
        </Grid>
        <Grid xs={9}>
          <Text size="$xs" css={{ mw: "184px" }}>
            ああああああああああああああああああああああああああああああ
          </Text>
        </Grid>
      </Grid.Container>
    </>
  )
}
