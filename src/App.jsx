import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ExpandableSection } from './components/ExpandableComponent';
import LastBuildTime from './components/LastBuildTime';
import DiscordJoinButton from "./components/DiscordJoinButton";

function App() {
  const handleJoinClick = () => {
    window.location.href = 'https://discord.gg/wrwXDJWbDy'; // Replace with your server invite link
  };

  return (
    <div className="flex flex-col min-h-screen justify-between w-full">
      <Header />
      <main className="flex-grow flex-1">
        <div className="max-w-screen-xl mx-auto px-4 py-8 text-left">
          <p>
            You do not need to read these rules, it is merely to reference in cases where there is ambiguity or controversy.

            The definition of masked/helmeted characters is that the facial covering must fully cover the face and cannot resemble a face. Eyes may be visible in some cases. Ask if you are unsure about any of these rules.
          </p>
          <div className="w-full flex justify-center items-center mt-5">
            <DiscordJoinButton onClick={handleJoinClick} />
          </div>
          <br />
          <ExpandableSection title="1. All aspects of this server are strictly 18+, including all content and characters depicted.">
            <ul>
              <li>
                <u>1.1. This extends to users!</u> Minors are not permitted on this server. If you are a minor, you are doing irrevocable harm to yourself and people around you just by being here.
              </li>
              <li>
                <u>1.2. Breaching this rule will result in an immediate ban without warning.</u>
              </li>
              <li>
                <u>1.3. Anything</u> involving minors or minor-appearing characters in <u>any</u> even remotely suggestive context will result in an immediate ban.
              </li>
              <li>
                <u>1.4. "Aged up" characters are still prohibited.</u>
              </li>
              <li>
                <ExpandableSection title="1.5. Any form of encouragement under the impression that the content is depicting a minor will also result in an immediate ban." iconSize="w-4 h-4">
                  <ul>
                    <li>
                      1.5.1. That is to say, reacting to, commenting on, or any form of expression of approval in a positive light will result in a ban.
                    </li>
                    <li>
                      1.5.2. If you didn't know a depiction is that of a minor, a warning will be given. You, the poster, are responsible for checking if a character is a minor.
                    </li>
                    <li>
                      1.5.3. Repeated occurrences of this will be considered suspicious and will result in a ban at the server moderator's discretion.
                    </li>
                  </ul>
                </ExpandableSection>
              </li>
              <li>
                <u>1.6. Seriously, we <b>do not</b> mess around with this.</u> Not only will you be banned, but any connected accounts to the offending account will be reported. There is zero tolerance in this area.
              </li>
            </ul>
          </ExpandableSection>
          <ExpandableSection title="2. Use common sense. Stick to the server's mutual interest and be respectful.">
            <ul>
              <li>
                2.1. The server's aim is: "DK's is a hub for enthusiasts of masked, helmeted, and faceless male human characters. This server is a welcoming and positive LGBT+ space." That said, the <u>mutual interest</u> is around masked/helmeted characters. For specifics on what is allowed, refer to Rule 3.
              </li>
              <li>
                2.2. Read the room. While many on this server may be members of other communities, the values and interests of this community are not necessarily shared.
              </li>
              <li>
                2.3. While you use this server, you are expected to respect other members and the rules.
              </li>
            </ul>
          </ExpandableSection>
          <ExpandableSection title="3. Content Guidelines">
            <ul>
              <li>
                <ExpandableSection title="3.1. Focus on helmeted/masked characters." iconSize="w-4 h-4">
                  <ul>
                    <li>
                      3.1.1. Other types of characters are allowed in SFW contexts, but the central point is helmeted/masked human characters.
                    </li>
                    <li>
                      <ExpandableSection title="3.1.2. This may include robots, aliens, monsters, and so forth." iconSize="w-4 h-4">
                        <ul>
                          <li>
                            3.1.2.1. They must resemble humans in their physique while remaining faceless.
                          </li>
                          <li>
                            3.1.2.2. This is difficult to define rigidly, so if you are unsure, contact a moderator.
                          </li>
                        </ul>
                      </ExpandableSection>
                    </li>
                  </ul>
                </ExpandableSection>
              </li>
              <li>
                <ExpandableSection title="3.2. No exposed faces in fetish work (unless they are a non-focal character)." iconSize="w-4 h-4">
                  <ul>
                    <li>
                      3.2.1. Suggestive or sexualized characters are to remain as defined above.
                    </li>
                    <li>
                      <ExpandableSection title="3.2.2. Non-focal characters (characters depicted but not the main role) are permitted." iconSize="w-4 h-4">
                        <ul>
                          <li>
                            3.2.2.1. In vore contexts, prey can be unmasked, assuming there isn't a focus on them at any point. For example (but not exclusively), the prey in an endo context with a focus on them inside the stomach in an internal context is <u>not</u> permitted.
                          </li>
                          <li>
                            3.2.2.2. Generally, this is quite tricky to define, so if you are unsure, contact a moderator.
                          </li>
                        </ul>
                      </ExpandableSection>
                    </li>
                  </ul>
                </ExpandableSection>
              </li>
              <li>
                <ExpandableSection title="3.3. Suggestive content must only focus on depicting male characters." iconSize="w-4 h-4">
                  <ul>
                    <li>
                      3.3.1. It is not necessary to depict all characters as male, but this server revolves around gay male content. Non-focal characters can be depicted as non-male; however, they must not be suggestive.
                    </li>
                    <li>
                      3.3.2. This server is open to all individuals of all forms of expression; however, content is as outlined above.
                    </li>
                  </ul>
                </ExpandableSection>
              </li>
              <li>
                <ExpandableSection title="3.4. No furry/animal-themed content." iconSize="w-4 h-4">
                  <ul>
                    <li>
                      3.4.1. <u>This server is not for furry content in any form!</u>
                    </li>
                    <li>
                      3.4.2. Animal-themed content includes animal heads/masks, genitalia, or themes is strictly forbidden.
                    </li>
                    <li>
                      3.4.3. This community does not align/agree with furry community rules, so do not assume it is permissible to port rules between communities.
                    </li>
                  </ul>
                </ExpandableSection>
              </li>
              <li>
                <ExpandableSection title="3.5. AI-generated content is generally prohibited." iconSize="w-4 h-4">
                  <ul>
                    <li>
                      3.5.1. <u>AI-generated imagery is an insult to art</u>, and this community does not support it in any way.
                    </li>
                    <li>
                      3.5.2. AI-generated content can only be brought up in a contained context under criticisms.
                    </li>
                  </ul>
                </ExpandableSection>
              </li>
              <li>
                <ExpandableSection title="3.6. Fetishes belong in designated channels only." iconSize="w-4 h-4">
                  <p>
                    This defines the fetishes that are allowed in the server. If it is not included on this list, it is <u>not</u> to be posted.
                  </p>
                  <ul>
                    <li>
                      3.6.1. <u>Vore</u> belongs strictly in the <code>#vore</code> channel, or general discussions with vore remain in <code>#general-vore</code>.
                    </li>
                    <li>
                      3.6.2. <u>NSFW</u> content is general but on this server refers to vanilla/realistic sexual content, hyper, and muscles.
                    </li>
                    <li>
                      3.6.3. <u>SFW</u> stands for "Safe For Work." If you wouldn't see a normal person seeing this in public, then put it in <code>#nsfw-media</code>.
                    </li>
                    <li>
                      3.6.4. <u>Belly</u> content refers to belly kinks including fat, inflation, stuffing, and weight gain. Excessive fat sizes (like blob content) belong in this channel.
                    </li>
                  </ul>
                </ExpandableSection>
              </li>
            </ul>
          </ExpandableSection>
          <ExpandableSection title="4. You, and you alone, are responsible for what you post. This includes any personal information you willingly divulge.">
            <ul>
              <li>
                4.1. Your profile is public to this server. If your profile is provocative or considered harmful, you will be removed from the server.
              </li>
              <li>
                4.2. Even if someone asked you to do something that breaks the rules, you are still liable for your actions.
              </li>
              <li>
                <ExpandableSection title="4.3. Ideological affiliations are not to be expressed in this server." iconSize="w-4 h-4">
                  <ul>
                    <li>
                      4.3.1. This server takes no sides in politics and is inclusive to all unless there is hostility.
                    </li>
                    <li>
                      4.3.2. Safety is a top priority for all server members, and if there is a user actively jeopardizing the server's values of safety and inclusivity, they will be promptly removed.
                    </li>
                    <li>
                      4.3.3. All this to say that the opinions you share may hold you accountable if they disrespect others or breach the community values.
                    </li>
                  </ul>
                </ExpandableSection>
              </li>
            </ul>
          </ExpandableSection>
          <ExpandableSection title="5. Credit all material posted.">
            <ul>
              <li>
                5.1. When the source is unknown, it may still be posted so long as it is under the context of asking for the original creator.
              </li>
              <li>
                5.2. Even if a work is something you commissioned, you must credit the artist that drew it.
              </li>
            </ul>
          </ExpandableSection>
          <br />
          <ExpandableSection title="6. List of permitted characters and features" color='green'>
            <p>
              This contains an incomplete list of permissible characters and features. If the content is not obviously permissible, ask on the server. This list will be updated regularly to give users a better understanding of what content is to be expected on this server.
            </p>
            <ul>
              <li>
                <ExpandableSection title="6.1. Edge case features that have been allowed" color='green'>
                  <ul>
                    <li>
                      6.1.1. Face-tight masks
                    </li>
                  </ul>
                </ExpandableSection>
              </li>
              <li>
                <ExpandableSection title="6.2. Edge case characters that have been allowed" color='green'>
                  <ul>
                    <li>
                      6.2.1. Ghost, Modern Warfare 2
                    </li>
                    <li>
                      6.2.2. König, Modern Warfare 2
                    </li>
                    <li>
                      6.2.3. Roadhog, Overwatch
                    </li>
                  </ul>
                </ExpandableSection>
              </li>
            </ul>
          </ExpandableSection>
          <ExpandableSection title="7. List of forbidden characters and features" color='red'>
            <p>
              This contains an incomplete list of forbidden characters and features. If the content is not obviously forbidden, ask on the server. This list will be updated regularly to give users a better understanding of what content is to be expected on this server.
            </p>
            <ul>
              <li>
                <ExpandableSection title="7.1. Edge case features that have been disallowed" color='red'>
                  <ul>
                    <li>
                      7.1.1. Animal masks
                    </li>
                    <li>
                      7.1.2. Face-shaped helmets
                    </li>
                    <li>
                      7.1.3. Incomplete facial covering (excluding eyes)
                    </li>
                    <li>
                      7.1.4. Silhouettes with no facial covering
                    </li>
                  </ul>
                </ExpandableSection>
                <li>
                  <ExpandableSection title="7.2. Edge case characters that have been disallowed" color='red'>
                    <ul>
                      <li>
                        7.2.1. King, Tekken
                      </li>
                      <li>
                        7.2.2. Zorro
                      </li>
                    </ul>
                  </ExpandableSection>
                </li>
              </li>
            </ul>
          </ExpandableSection>
        </div>
        <LastBuildTime />
      </main>
      <Footer />
    </div>
  );
}

export default App;
