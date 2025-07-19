export type PlatformTypes = {
  ActionStoreAPI: {
    cleanActions: () => undefined;
    storeAction: () => undefined;
    triggerActions: () => undefined;
  };
  AdManagers: {
    adStateReporter: {
      focusState: {
        listeners: Array<PlatformTypes["AdManagers"]["adStateReporter"]>;
      } & {
        addFocusListener: (a: any) => any;
        hasFocus: () => boolean;
        removeAllFocusListeners: () => any;
        removeFocusListener: (a: any) => any;
      };
      history: {
        action: string;
        block: () => () => undefined;
        canGo: (a: any) => any;
        createHref: (a: any) => any;
        entries: Array<{
          hash: string;
          key: string;
          pathname: string;
          search: string;
          state: {
            navigationalRoot: string;
          };
        }>;
        go: (a: any) => any;
        goBack: () => undefined;
        goForward: () => undefined;
        index: number;
        length: number;
        listen: (a: any) => any;
        location: PlatformTypes["AdManagers"]["adStateReporter"]["history"]["entries"][0];
        push: (a: any, b: any) => any;
        replace: (a: any, b: any) => any;
      };
      setAdStateKey: (a: any, b: any) => any;
    } & {
      onFocusChanged: (a: any) => any;
    };
    audio: {
      audioApi: {
        postEvent: (a: any) => any;
      };
      enabled: boolean;
      getContextAdInfo: () => Promise<any>;
      inStreamApi: {
        adsCoreConnector: {
          clearSlot: (a: any) => any;
          createSlot: (a: any, b: any) => any;
          enableSlot: (a: any) => any;
          fetchSlot: (a: any, b: any) => any;
          getAdState: () => Promise<any>;
          getAds: (a: any, b: any) => any;
          getPreviewAd: (a: any) => any;
          getSlot: (a: any) => any;
          getSlotSettings: (a: any) => any;
          increaseStreamTime: (a: any) => any;
          insertAd: (a: any) => any;
          logAudioVolume: (a: any) => any;
          overrideCountry: (a: any) => any;
          overridePodcastMetadata: (a: any) => any;
          prepareNextContextSlot: (a: any, b: any) => any;
          putState: PlatformTypes["AdManagers"]["adStateReporter"]["setAdStateKey"];
          putTargeting: (a: any) => any;
          removeRequestHeader: (a: any, b: any) => any;
          setRequestHeader: (a: any, b: any, c: any) => any;
          skipToNextWithOverride: () => undefined;
          subscribeToAdFormat: (a: any, b: any) => any;
          subscribeToInStreamAds: (a: any) => any;
          subscribeToProductState: (a: any, b: any) => any;
          subscribeToSlot: (a: any, b: any) => any;
          subscribeToState: (a: any) => any;
          triggerSlot: (a: any) => any;
          updateAdServerEndpoint: (a: any, b: any) => any;
          updateAdStateEndpoint: (a: any) => any;
        };
        enabled: boolean;
        inStreamAd: null;
        inStreamAdsSubscription: {
          cancel: () => undefined;
        };
        onAdMessageCallbacks: Array<(a: any) => any>;
      } & {
        disable: () => any;
        enable: (a: any) => any;
        getInStreamAd: () => any;
        processMessage: (a: any) => any;
        skipToNext: () => any;
        subscribeToInStreamAds: () => any;
      };
      onAdMessage: PlatformTypes["AdManagers"]["audio"]["inStreamApi"]["onAdMessageCallbacks"][1];
      onInfoCallback: (a: any) => any;
      subscription: PlatformTypes["AdManagers"]["audio"]["inStreamApi"]["inStreamAdsSubscription"];
    } & {
      disable: () => any;
      enable: (a: any) => any;
      getEnabled: () => any;
      logClick: (a: any, b: any) => any;
    };
    billboard: {
      activating: boolean;
      activitySubscription: () => boolean;
      billboardApi: {
        adsCoreConnector: PlatformTypes["AdManagers"]["audio"]["inStreamApi"]["adsCoreConnector"];
      } & {
        createSlot: (a: any, b: any) => any;
        getSlotConfiguration: (a: any, b: any) => any;
        patchTargeting: (a: any, b: any) => any;
        postEvent: (a: any, b: any, c: any) => any;
        postToSlot: (a: any, b: any) => any;
        subscribeToSlotType: (a: any, b: any) => any;
        triggerSlotClearAll: (a: any) => any;
      };
      disableWindow: () => undefined;
      displayBillboard: () => Promise<any>;
      enabled: boolean;
      finish: () => undefined;
      focusMinimize: () => undefined;
      focusState: {
        listeners: Array<PlatformTypes["AdManagers"]["billboard"]>;
      } & {
        addFocusListener: PlatformTypes["AdManagers"]["adStateReporter"]["focusState"]["addFocusListener"];
        hasFocus: PlatformTypes["AdManagers"]["adStateReporter"]["focusState"]["hasFocus"];
        removeAllFocusListeners: PlatformTypes["AdManagers"]["adStateReporter"]["focusState"]["removeAllFocusListeners"];
        removeFocusListener: PlatformTypes["AdManagers"]["adStateReporter"]["focusState"]["removeFocusListener"];
      };
      listener: {
        canShow: () => boolean;
        create: (a: any) => any;
        destroy: () => Promise<any>;
        isActive: () => boolean;
        minimize: () => undefined;
      };
      onActivity: (a: any) => any;
      onAdMessage: (a: any) => any;
      subscription: {
        cancel: () => undefined;
      };
      triggerAutoMinimizeIfPossible: () => undefined;
      viewedTimestamp: number;
    } & {
      adClick: () => any;
      clearSlot: () => any;
      disable: () => Promise<any>;
      enable: (a: any) => any;
      getFocusTimeoutMs: () => Promise<any>;
      handleApplicationGainedFocus: () => Promise<any>;
      handleApplicationLostFocus: () => Promise<any>;
      handleDiscard: () => any;
      handlePreview: (a: any) => any;
      isPreviewServiceAd: (a: any) => any;
      logEvent: (a: any) => any;
      mapBillboardData: (a: any) => any;
      minimize: () => any;
      onError: () => any;
      onFinish: () => any;
      onFocusChanged: (a: any) => any;
      onRender: () => any;
      resetState: () => any;
    };
    config: {
      getAdsSlotConfig: () => Promise<any>;
    };
    embeddedAd: {
      adEventLogger: {
        appStartupId: string;
        eventSender: {
          _listeners: {};
          _metaListeners: {
            add: {};
            remove: {};
          };
          droppedEventsTracker: {
            storageManager: {
              configureMaxStorageCapacity: (a: any) => any;
              currentTotalSizeForDroppedCounters: number;
              currentTotalSizeForEvents: number;
              maxStorageCapacityForDroppedCountersInBytes: number;
              maxStorageCapacityForEventsInBytes: number;
              setTotalDroppedCountersStorageSizeAtStartup: () => undefined;
              setTotalEventStorageSizeAtStartup: () => undefined;
              storage: {
                adapter: {
                  clear: () => undefined;
                  getItem: (a: any) => any;
                  getKeys: () => Array<any>;
                  removeItem: (a: any) => any;
                  setItem: (a: any, b: any) => any;
                };
                flushStrategy: {
                  interval: number;
                  kind: string;
                };
                maxCapacityForDroppedInPercentage: number;
                maxCapacityInBytes: number;
              };
              storageKeyPrefix: string;
            } & {
              addItemInDroppedCountersStorage: (a: any, b: any) => any;
              addItemInEventsStorage: (a: any, b: any) => any;
              canMakeDroppedCountersStorageFull: (a: any) => any;
              canMakeEventsStorageFull: (a: any) => any;
              clear: () => any;
              configureMaxStorageCapacity: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["droppedEventsTracker"]["storageManager"]["configureMaxStorageCapacity"];
              createStorage: (a: any) => any;
              flushStrategy: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["droppedEventsTracker"]["storageManager"]["storage"]["flushStrategy"];
              getItem: (a: any) => any;
              getItemSizeInBytes: (a: any, b: any) => any;
              getKeys: () => any;
              getOrCreateId: (a: any, b: any) => any;
              removeItemInDroppedCountersStorage: (a: any) => any;
              removeItemInEventsStorage: (a: any) => any;
              setCounterItem: (a: any, b: any) => any;
              setItem: (a: any, b: any) => any;
              setTotalDroppedCountersStorageSizeAtStartup: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["droppedEventsTracker"]["storageManager"]["setTotalDroppedCountersStorageSizeAtStartup"];
              setTotalEventStorageSizeAtStartup: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["droppedEventsTracker"]["storageManager"]["setTotalEventStorageSizeAtStartup"];
              storageAdapter: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["droppedEventsTracker"]["storageManager"]["storage"]["adapter"];
              storageType: string;
              updateItemInDroppedCountersStorage: (a: any, b: any) => any;
              updateItemInEventsStorage: (a: any, b: any) => any;
            };
          } & {
            getDroppedEventCounters: (a: any) => any;
            getDroppedEventsCountersPerSequenceId: (a: any) => any;
            updateDroppedEventCount: (a: any, b: any) => any;
            updateReportedEventCounters: (a: any) => any;
          };
          eventsManager: {
            storageManager: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["droppedEventsTracker"]["storageManager"];
          } & {
            addEvent: (a: any, b: any) => any;
            getEvent: (a: any) => any;
            getEventKey: (a: any, b: any) => any;
            getEvents: (a: any) => any;
            getEventsKeys: (a: any) => any;
            getEventsKeysPerSequenceId: (a: any) => any;
            getGlobalSequenceNumberFromEventKey: (a: any) => any;
            removeEvents: (a: any) => any;
          };
          flush: () => Promise<any>;
          installationId: string;
          instanceContexts: {
            context_application_desktop: {
              version_code: number;
              version_string: string;
            };
            context_client_id: {
              value: string;
            };
            context_device_desktop: {
              device_id: string;
              device_manufacturer: string;
              device_model: string;
              os_version: string;
              platform_type: string;
            };
            context_installation_id: {
              value: string;
            };
          };
          ownerProvider: () => string;
          sendESStats: () => any;
          sequenceIdProvider: {
            installationId: string;
          } & {
            getId: (a: any, b: any) => any;
            getIdHash: (a: any) => any;
          };
          sequenceNumberProvider: {
            storageManager: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["droppedEventsTracker"]["storageManager"];
          } & {
            commitSequenceNumber: (a: any, b: any) => any;
            generateNextEventSequenceNumber: (a: any, b: any) => any;
            generateNextGlobalSequenceNumber: () => any;
            generateNextSequenceNumber: (a: any) => any;
            getEventsSequenceNumbers: (a: any) => any;
            getNextSequenceNumber: (a: any) => any;
            getSequenceNumbersPerSequenceId: (a: any) => any;
          };
          statsProvider: {
            addDroppedEventsCounters: (a: any, b: any, c: any) => any;
            addDroppedEventsCountersData: (a: any, b: any) => any;
            addEventsToESSData: (a: any, b: any) => any;
            addLossStatsData: (a: any) => any;
            getInitialESSData: (a: any) => any;
            provideEventSenderStats: (a: any, b: any, c: any) => any;
          };
          storageManager: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["droppedEventsTracker"]["storageManager"];
          transport: {
            _Fetch: {
              __esModule: boolean;
              isSupported: () => boolean;
              request: (a: any) => any;
            };
            _XHR: {
              __esModule: boolean;
              request: (a: any) => any;
            };
            _authenticateCalled: boolean;
            _authenticateWithToken: (a: any) => any;
            _authenticationPromise: null;
            _connectCalled: boolean;
            _connectToEndpoints: (a: any) => any;
            _connectionObserver: {
              _listeners: {
                beforeunload: Array<{
                  listener: () => Promise<any>;
                  options: {};
                }>;
                offline: Array<{
                  listener: () => undefined;
                  options: {};
                }>;
                online: Array<{
                  listener: () => undefined;
                  options: {};
                }>;
              };
              _metaListeners: {
                add: {};
                remove: {};
              };
              _navigator: {
                requestMediaKeySystemAccess: (a: any, b: any) => any;
              } & {
                adAuctionComponents: (a: any) => any;
                appCodeName: string;
                appName: string;
                appVersion: string;
                bluetooth: {
                  getAvailability: () => Promise<any>;
                  requestDevice: () => Promise<any>;
                } & {
                  addEventListener: (a: any, b: any) => any;
                  dispatchEvent: (a: any) => any;
                  removeEventListener: (a: any, b: any) => any;
                };
                canLoadAdAuctionFencedFrame: () => any;
                canShare: () => any;
                clearAppBadge: () => Promise<any>;
                clearOriginJoinedAdInterestGroups: (a: any) => any;
                clipboard: {
                  read: () => Promise<any>;
                  readText: () => Promise<any>;
                  write: (a: any) => any;
                  writeText: (a: any) => any;
                } & {
                  addEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["addEventListener"];
                  dispatchEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["dispatchEvent"];
                  removeEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["removeEventListener"];
                };
                connection: {
                  downlink: number;
                  effectiveType: string;
                  onchange: null;
                  rtt: number;
                  saveData: boolean;
                } & {
                  addEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["addEventListener"];
                  dispatchEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["dispatchEvent"];
                  removeEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["removeEventListener"];
                };
                cookieEnabled: boolean;
                createAuctionNonce: () => Promise<any>;
                credentials: {
                  create: () => Promise<any>;
                  get: () => Promise<any>;
                  preventSilentAccess: () => Promise<any>;
                  store: (a: any) => any;
                };
                deprecatedReplaceInURN: (a: any, b: any) => any;
                deprecatedRunAdAuctionEnforcesKAnonymity: boolean;
                deprecatedURNToURL: (a: any) => any;
                deviceMemory: number;
                devicePosture: {
                  onchange: null;
                  type: string;
                } & {
                  addEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["addEventListener"];
                  dispatchEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["dispatchEvent"];
                  removeEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["removeEventListener"];
                };
                doNotTrack: null;
                geolocation: {
                  clearWatch: (a: any) => any;
                  getCurrentPosition: (a: any) => any;
                  watchPosition: (a: any) => any;
                };
                getBattery: () => Promise<any>;
                getGamepads: () => any;
                getInstalledRelatedApps: () => Promise<any>;
                getInterestGroupAdAuctionData: (a: any) => any;
                getUserMedia: (a: any, b: any, c: any) => any;
                gpu: {
                  getPreferredCanvasFormat: () => any;
                  requestAdapter: () => Promise<any>;
                  wgslLanguageFeatures: {
                    entries: () => any;
                    forEach: (a: any) => any;
                    has: (a: any) => any;
                    keys: () => any;
                    size: number;
                    values: () => any;
                  };
                };
                hardwareConcurrency: number;
                hid: {
                  getDevices: () => Promise<any>;
                  onconnect: null;
                  ondisconnect: null;
                  requestDevice: (a: any) => any;
                } & {
                  addEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["addEventListener"];
                  dispatchEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["dispatchEvent"];
                  removeEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["removeEventListener"];
                };
                ink: {
                  requestPresenter: () => Promise<any>;
                };
                javaEnabled: () => any;
                joinAdInterestGroup: (a: any) => any;
                keyboard: {
                  getLayoutMap: () => Promise<any>;
                  lock: () => Promise<any>;
                  unlock: () => any;
                };
                language: string;
                languages: Array<string>;
                leaveAdInterestGroup: () => Promise<any>;
                locks: {
                  query: () => Promise<any>;
                  request: (a: any, b: any) => any;
                };
                login: {
                  setStatus: (a: any) => any;
                };
                managed: {
                  getManagedConfiguration: (a: any) => any;
                  onmanagedconfigurationchange: null;
                } & {
                  addEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["addEventListener"];
                  dispatchEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["dispatchEvent"];
                  removeEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["removeEventListener"];
                };
                maxTouchPoints: number;
                mediaCapabilities: {
                  decodingInfo: (a: any) => any;
                } & {
                  decodingInfo: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["mediaCapabilities"]["decodingInfo"];
                  encodingInfo: (a: any) => any;
                };
                mediaDevices: {
                  enumerateDevices: () => Promise<any>;
                  getDisplayMedia: () => Promise<any>;
                  getSupportedConstraints: () => any;
                  getUserMedia: () => Promise<any>;
                  ondevicechange: null;
                  setCaptureHandleConfig: () => any;
                } & {
                  addEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["addEventListener"];
                  dispatchEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["dispatchEvent"];
                  removeEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["removeEventListener"];
                };
                mediaSession: {
                  metadata: null;
                  playbackState: string;
                  setActionHandler: (a: any, b: any) => any;
                  setCameraActive: (a: any) => any;
                  setMicrophoneActive: (a: any) => any;
                  setPositionState: () => any;
                };
                mimeTypes: {
                  "0": {
                    description: string;
                    enabledPlugin: {
                      "0": {
                        description: string;
                        enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["mimeTypes"]["0"]["enabledPlugin"];
                        suffixes: string;
                        type: string;
                      };
                      "1": {
                        description: string;
                        enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["mimeTypes"]["0"]["enabledPlugin"];
                        suffixes: string;
                        type: string;
                      };
                      "application/pdf": {
                        description: string;
                        enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["mimeTypes"]["0"]["enabledPlugin"];
                        suffixes: string;
                        type: string;
                      };
                      "text/pdf": {
                        description: string;
                        enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["mimeTypes"]["0"]["enabledPlugin"];
                        suffixes: string;
                        type: string;
                      };
                    } & {
                      description: string;
                      filename: string;
                      item: (a: any) => any;
                      length: number;
                      name: string;
                      namedItem: (a: any) => any;
                    };
                    suffixes: string;
                    type: string;
                  };
                  "1": {
                    description: string;
                    enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["mimeTypes"]["0"]["enabledPlugin"];
                    suffixes: string;
                    type: string;
                  };
                  "application/pdf": PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["mimeTypes"]["0"];
                  "text/pdf": PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["mimeTypes"]["1"];
                } & {
                  item: (a: any) => any;
                  length: number;
                  namedItem: (a: any) => any;
                };
                onLine: boolean;
                pdfViewerEnabled: boolean;
                permissions: {
                  query: (a: any) => any;
                };
                platform: string;
                plugins: {
                  "0": PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["mimeTypes"]["0"]["enabledPlugin"];
                  "1": {
                    "0": {
                      description: string;
                      enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["1"];
                      suffixes: string;
                      type: string;
                    };
                    "1": {
                      description: string;
                      enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["1"];
                      suffixes: string;
                      type: string;
                    };
                    "application/pdf": {
                      description: string;
                      enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["1"];
                      suffixes: string;
                      type: string;
                    };
                    "text/pdf": {
                      description: string;
                      enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["1"];
                      suffixes: string;
                      type: string;
                    };
                  } & {
                    description: string;
                    filename: string;
                    item: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["mimeTypes"]["0"]["enabledPlugin"]["item"];
                    length: number;
                    name: string;
                    namedItem: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["mimeTypes"]["0"]["enabledPlugin"]["namedItem"];
                  };
                  "2": {
                    "0": {
                      description: string;
                      enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["2"];
                      suffixes: string;
                      type: string;
                    };
                    "1": {
                      description: string;
                      enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["2"];
                      suffixes: string;
                      type: string;
                    };
                    "application/pdf": {
                      description: string;
                      enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["2"];
                      suffixes: string;
                      type: string;
                    };
                    "text/pdf": {
                      description: string;
                      enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["2"];
                      suffixes: string;
                      type: string;
                    };
                  } & {
                    description: string;
                    filename: string;
                    item: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["mimeTypes"]["0"]["enabledPlugin"]["item"];
                    length: number;
                    name: string;
                    namedItem: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["mimeTypes"]["0"]["enabledPlugin"]["namedItem"];
                  };
                  "3": {
                    "0": {
                      description: string;
                      enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["3"];
                      suffixes: string;
                      type: string;
                    };
                    "1": {
                      description: string;
                      enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["3"];
                      suffixes: string;
                      type: string;
                    };
                    "application/pdf": {
                      description: string;
                      enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["3"];
                      suffixes: string;
                      type: string;
                    };
                    "text/pdf": {
                      description: string;
                      enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["3"];
                      suffixes: string;
                      type: string;
                    };
                  } & {
                    description: string;
                    filename: string;
                    item: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["mimeTypes"]["0"]["enabledPlugin"]["item"];
                    length: number;
                    name: string;
                    namedItem: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["mimeTypes"]["0"]["enabledPlugin"]["namedItem"];
                  };
                  "4": {
                    "0": {
                      description: string;
                      enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["4"];
                      suffixes: string;
                      type: string;
                    };
                    "1": {
                      description: string;
                      enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["4"];
                      suffixes: string;
                      type: string;
                    };
                    "application/pdf": {
                      description: string;
                      enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["4"];
                      suffixes: string;
                      type: string;
                    };
                    "text/pdf": {
                      description: string;
                      enabledPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["4"];
                      suffixes: string;
                      type: string;
                    };
                  } & {
                    description: string;
                    filename: string;
                    item: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["mimeTypes"]["0"]["enabledPlugin"]["item"];
                    length: number;
                    name: string;
                    namedItem: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["mimeTypes"]["0"]["enabledPlugin"]["namedItem"];
                  };
                  "Chrome PDF Viewer": PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["1"];
                  "Chromium PDF Viewer": PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["2"];
                  "Microsoft Edge PDF Viewer": PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["3"];
                  "PDF Viewer": PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["mimeTypes"]["0"]["enabledPlugin"];
                  "WebKit built-in PDF": PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["plugins"]["4"];
                } & {
                  item: (a: any) => any;
                  length: number;
                  namedItem: (a: any) => any;
                  refresh: () => any;
                };
                presentation: {
                  defaultRequest: null;
                  receiver: null;
                };
                product: string;
                productSub: string;
                protectedAudience: {
                  queryFeatureSupport: (a: any) => any;
                };
                registerProtocolHandler: (a: any, b: any) => any;
                requestMIDIAccess: () => Promise<any>;
                requestMediaKeySystemAccess: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["requestMediaKeySystemAccess"];
                runAdAuction: (a: any) => any;
                scheduling: {
                  isInputPending: () => any;
                };
                sendBeacon: (a: any) => any;
                serial: {
                  getPorts: () => Promise<any>;
                  onconnect: null;
                  ondisconnect: null;
                  requestPort: () => Promise<any>;
                } & {
                  addEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["addEventListener"];
                  dispatchEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["dispatchEvent"];
                  removeEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["removeEventListener"];
                };
                serviceWorker: {
                  controller: null;
                  getRegistration: () => Promise<any>;
                  getRegistrations: () => Promise<any>;
                  oncontrollerchange: null;
                  onmessage: null;
                  onmessageerror: null;
                  ready: Promise<any>;
                  register: (a: any) => any;
                  startMessages: () => any;
                } & {
                  addEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["addEventListener"];
                  dispatchEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["dispatchEvent"];
                  removeEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["removeEventListener"];
                };
                setAppBadge: () => Promise<any>;
                share: () => Promise<any>;
                storage: {
                  estimate: () => Promise<any>;
                  getDirectory: () => Promise<any>;
                  persist: () => Promise<any>;
                  persisted: () => Promise<any>;
                };
                storageBuckets: {
                  delete: (a: any) => any;
                  keys: () => Promise<any>;
                  open: (a: any) => any;
                };
                unregisterProtocolHandler: (a: any, b: any) => any;
                updateAdInterestGroups: () => any;
                usb: {
                  getDevices: () => Promise<any>;
                  onconnect: null;
                  ondisconnect: null;
                  requestDevice: (a: any) => any;
                } & {
                  addEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["addEventListener"];
                  dispatchEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["dispatchEvent"];
                  removeEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["removeEventListener"];
                };
                userActivation: {
                  hasBeenActive: boolean;
                  isActive: boolean;
                };
                userAgent: string;
                userAgentData: {
                  brands: Array<{
                    brand: string;
                    version: string;
                  }>;
                  getHighEntropyValues: (a: any) => any;
                  mobile: boolean;
                  platform: string;
                  toJSON: () => any;
                };
                vendor: string;
                vendorSub: string;
                vibrate: (a: any) => any;
                virtualKeyboard: {
                  boundingRect: {
                    height: number;
                    width: number;
                    x: number;
                    y: number;
                  } & {
                    bottom: number;
                    height: number;
                    left: number;
                    right: number;
                    toJSON: () => any;
                    top: number;
                    width: number;
                    x: number;
                    y: number;
                  };
                  hide: () => any;
                  ongeometrychange: null;
                  overlaysContent: boolean;
                  show: () => any;
                } & {
                  addEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["addEventListener"];
                  dispatchEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["dispatchEvent"];
                  removeEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["removeEventListener"];
                };
                wakeLock: {
                  request: () => Promise<any>;
                };
                webdriver: boolean;
                webkitGetUserMedia: (a: any, b: any, c: any) => any;
                webkitPersistentStorage: {
                  queryUsageAndQuota: (a: any) => any;
                  requestQuota: (a: any) => any;
                };
                webkitTemporaryStorage: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["webkitPersistentStorage"];
                windowControlsOverlay: {
                  getTitlebarAreaRect: () => any;
                  ongeometrychange: null;
                  visible: boolean;
                } & {
                  addEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["addEventListener"];
                  dispatchEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["dispatchEvent"];
                  removeEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["removeEventListener"];
                };
                xr: {
                  isSessionSupported: (a: any) => any;
                  ondevicechange: null;
                  requestSession: (a: any) => any;
                  supportsSession: (a: any) => any;
                } & {
                  addEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["addEventListener"];
                  dispatchEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["dispatchEvent"];
                  removeEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["removeEventListener"];
                };
              };
            } & {
              isOnline: () => any;
            } & {
              _dispatchFromStore: (a: any, b: any) => any;
              addListener: (a: any, b: any) => any;
              addListeners: (a: any) => any;
              createEvent: (a: any, b: any) => any;
              emit: (a: any, b: any) => any;
              emitAndWait: (a: any, b: any, c: any) => any;
              emitEvent: (a: any) => any;
              emitEventAndWait: (a: any, b: any) => any;
              emitEventSync: (a: any) => any;
              emitSync: (a: any, b: any) => any;
              on: (a: any, b: any) => any;
              onAddListener: (a: any, b: any) => any;
              onRemoveListener: (a: any, b: any) => any;
              once: (a: any, b: any) => any;
              proxyEmit: (a: any, b: any, c: any) => any;
              proxyEmitAll: (a: any, b: any) => any;
              proxyEmitAllSync: (a: any, b: any) => any;
              proxyEmitSync: (a: any, b: any, c: any) => any;
              removeAllListeners: (a: any) => any;
              removeListener: (a: any, b: any) => any;
              removeListeners: (a: any) => any;
            };
            _counter: {
              _baseTime: number;
              _ceiling: number;
              _curve: string;
              _jitter: boolean;
            } & {
              getTime: (a: any) => any;
            };
            _disableAutoLogout: boolean;
            _disconnectBeforeUnload: boolean;
            _endpoints: {
              dealer: string;
              webapi: string;
              webgate: string;
            };
            _endpointsProvider: (a: any) => any;
            _forcePolyfillTypes: {};
            _initTime: number;
            _isReconnecting: boolean;
            _lastDisconnect: number;
            _lastToken: string;
            _lastTokenExpiry: number;
            _listeners: {
              access_token: Array<
                | {
                    listener: (a: any) => any;
                    options: {};
                  }
                | {
                    listener: () => Promise<any>;
                    options: {};
                  }
              >;
              authenticated: Array<{
                listener: () => undefined;
                options: {};
              }>;
              authentication_failed: Array<
                | {
                    listener: () => undefined;
                    options: {};
                  }
                | {
                    listener: () => Promise<any>;
                    options: {};
                  }
              >;
              before_online_disconnect: Array<{
                listener: (a: any) => any;
                options: {};
              }>;
              connected: Array<{
                listener: () => undefined;
                options: {};
              }>;
              connection_id: Array<{
                listener: (a: any) => any;
                options: {};
              }>;
              disconnected: Array<{
                listener: () => undefined;
                options: {};
              }>;
              endpoints_resolved: Array<{
                listener: (a: any) => any;
                options: {};
              }>;
              logged_out: Array<{
                listener: () => undefined;
                options: {};
              }>;
              offline: Array<{
                listener: (a: any) => any;
                options: {};
              }>;
              online: Array<{
                listener: (a: any) => any;
                options: {};
              }>;
              reconnected: Array<
                | {
                    listener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_listeners"]["connected"][1]["listener"];
                    options: {};
                  }
                | {
                    listener: () => undefined;
                    options: {};
                  }
              >;
              reconnecting: Array<{
                listener: () => undefined;
                options: {};
              }>;
            };
            _metaListeners: {
              add: {
                authenticated: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
                connected: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
                connection_id: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
              };
              remove: {
                authenticated: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
                connected: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
                connection_id: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
              };
            };
            _onAuthenticated: (a: any) => any;
            _onAuthenticationFailed: (a: any, b: any) => any;
            _onConnected: () => Promise<any>;
            _ownerRef: {};
            _parseProvidedToken: (a: any) => any;
            _pluginMediator: {
              _listeners: {
                plugin_connection_info: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
                plugin_disconnected: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
                plugin_message: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
                transport_authenticate: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
                transport_before_process_request: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
                transport_before_send_request: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
                transport_connect: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
                transport_disconnect: Array<{
                  listener: () => undefined;
                  options: {};
                }>;
              };
              _metaListeners: {
                add: {
                  transport_authenticate: Array<{
                    listener: (a: any) => any;
                    options: {};
                  }>;
                  transport_connect: Array<{
                    listener: (a: any) => any;
                    options: {};
                  }>;
                };
                remove: {
                  transport_authenticate: Array<{
                    listener: (a: any) => any;
                    options: {};
                  }>;
                  transport_connect: Array<{
                    listener: (a: any) => any;
                    options: {};
                  }>;
                };
              };
            } & {
              _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
              addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
              addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
              createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
              emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
              emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
              emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
              emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
              emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
              emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
              on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
              onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
              onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
              once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
              proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
              proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
              proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
              proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
              removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
              removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
              removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
            };
            _plugins: {
              dealer: {
                _dealer: {
                  _WebSocket: (a: any) => any;
                  _closeBeforeEventsRejector: () => undefined;
                  _connected: boolean;
                  _connectionId: null;
                  _connectionURI: null;
                  _endpoint: string;
                  _heartbeatTimeout: number;
                  _heartbeatTimeoutToken: number;
                  _heartbeatToken: number;
                  _lastPingDeferred: null;
                  _listeners: {
                    connection_id: Array<{
                      listener: (a: any) => any;
                      options: {};
                    }>;
                    disconnected: Array<{
                      listener: (a: any) => any;
                      options: {};
                    }>;
                    error: Array<{
                      listener: (a: any) => any;
                      options: {};
                    }>;
                    message: Array<{
                      listener: (a: any) => any;
                      options: {};
                    }>;
                    request: Array<{
                      listener: (a: any) => any;
                      options: {};
                    }>;
                  };
                  _metaListeners: {
                    add: {};
                    remove: {};
                  };
                  _socket: null;
                  _waitingForConnectionId: boolean;
                } & {
                  _handleClose: (a: any) => any;
                  _handleDisconnectBeforeEvents: (a: any) => any;
                  _handleError: (a: any) => any;
                  _handleMessage: (a: any) => any;
                  _handleOpen: (a: any) => any;
                  _onHeartbeatError: () => any;
                  _onHeartbeatSuccess: () => any;
                  _parseMessage: (a: any) => any;
                  _prepareConnectionId: (a: any) => any;
                  _reply: (a: any, b: any) => any;
                  _startHeartbeat: (a: any) => any;
                  _stopHeartbeat: () => any;
                  authenticate: (a: any) => any;
                  connect: (a: any) => any;
                  disconnect: () => any;
                  getConnectionId: () => any;
                  getConnectionInfo: () => any;
                  hasConnectionId: () => any;
                  ping: () => any;
                } & {
                  _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
                  addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
                  addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
                  createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
                  emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
                  emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
                  emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
                  emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
                  emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
                  emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
                  on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
                  onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
                  onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
                  once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
                  proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
                  proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
                  proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
                  proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
                  removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
                  removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
                  removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
                };
                _mediator: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_pluginMediator"];
                _onDealerConnectionId: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_plugins"]["dealer"]["_dealer"]["_listeners"]["connection_id"][0]["listener"];
                _onDealerDisconnected: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_plugins"]["dealer"]["_dealer"]["_listeners"]["disconnected"][0]["listener"];
                _onDealerMessage: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_plugins"]["dealer"]["_dealer"]["_listeners"]["message"][0]["listener"];
                _onDealerRequest: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_plugins"]["dealer"]["_dealer"]["_listeners"]["request"][0]["listener"];
                _onTransportAuthenticate: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"]["transport_authenticate"][0]["listener"];
                _onTransportConnect: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"]["transport_connect"][0]["listener"];
                _onTransportDisconnect: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"]["transport_disconnect"][0]["listener"];
                api: {
                  getConnectionInfo: () => Promise<any>;
                  hasConnectionInfo: () => boolean;
                };
                name: string;
              } & {
                _onDealerConnectionId: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_plugins"]["dealer"]["_dealer"]["_listeners"]["connection_id"][0]["listener"];
                _onDealerDisconnected: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_plugins"]["dealer"]["_dealer"]["_listeners"]["disconnected"][0]["listener"];
                _onDealerError: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_plugins"]["dealer"]["_dealer"]["_listeners"]["error"][0]["listener"];
                _onDealerMessage: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_plugins"]["dealer"]["_dealer"]["_listeners"]["message"][0]["listener"];
                _onDealerRequest: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_plugins"]["dealer"]["_dealer"]["_listeners"]["request"][0]["listener"];
                _onTransportAuthenticate: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"]["transport_authenticate"][0]["listener"];
                _onTransportConnect: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"]["transport_connect"][0]["listener"];
                _onTransportDisconnect: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"]["transport_disconnect"][0]["listener"];
                attach: (a: any, b: any) => any;
                detach: (a: any, b: any) => any;
              };
              "desktop-lifecycle-plugin": {
                _authAttempts: number;
                _authCounter: {
                  _baseTime: number;
                  _ceiling: number;
                  _curve: string;
                  _jitter: boolean;
                } & {
                  getTime: (a: any) => any;
                };
                _authTimeoutId: number;
                _onAuthenticationFailed: Array<(a: any, b: any) => any>;
                _transport: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"];
                name: string;
                onAuthenticated: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_listeners"]["authenticated"][0]["listener"];
                onAuthenticationFailed: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_listeners"]["authentication_failed"][0]["listener"];
                onBeforeProcessRequest: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"]["transport_before_process_request"][0]["listener"];
                onBeforeSendRequest: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"]["transport_before_send_request"][0]["listener"];
                onConnected: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_listeners"]["connected"][0]["listener"];
                onDisconnected: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_listeners"]["disconnected"][0]["listener"];
              } & {
                addOnAuthenticationFailed: (a: any) => any;
                attach: (a: any, b: any) => any;
                detach: (a: any, b: any) => any;
                onAuthenticated: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_listeners"]["authenticated"][0]["listener"];
                onAuthenticationFailed: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_listeners"]["authentication_failed"][0]["listener"];
                onBeforeProcessRequest: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"]["transport_before_process_request"][0]["listener"];
                onBeforeSendRequest: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"]["transport_before_send_request"][0]["listener"];
                onConnected: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_listeners"]["connected"][0]["listener"];
                onDisconnected: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_listeners"]["disconnected"][0]["listener"];
                tryAuthenticate: () => any;
              };
            };
            _quickDisconnectCount: number;
            _reconnectTimeout: number;
            _reconnectionRetries: number;
            _refreshTokenPromise: null;
            _requestMode: string;
            _stateAwareListeners: {
              authenticated: Array<any>;
              connected: Array<any>;
              connection_id: Array<any>;
              transport_authenticate: Array<any>;
              transport_connect: Array<any>;
            };
            _stateAwareOperationMetrics: {
              authenticated: {
                end_time: number;
                start_time: number;
              };
            };
            _stateAwareRunners: {
              authenticated: null;
              connected: null;
              connection_id: null;
              transport_authenticate: null;
              transport_connect: null;
            };
            _stateMask: number;
            _tokenProvider: () => Promise<any>;
            authenticate: () => Promise<any>;
          } & {
            _authenticate: (a: any) => any;
            _authenticateWithToken: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_authenticateWithToken"];
            _connect: () => any;
            _connectToEndpoints: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectToEndpoints"];
            _createReconnector: () => () => any;
            _disconnect: (a: any) => any;
            _getQuickDisconnectTimeout: () => any;
            _handleRetriedRequestError: (a: any) => any;
            _init: () => any;
            _onAddListener: (a: any, b: any) => any;
            _onAuthenticated: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_onAuthenticated"];
            _onAuthenticationFailed: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_onAuthenticationFailed"];
            _onConnected: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_onConnected"];
            _onLogout: () => any;
            _onOffline: () => any;
            _onOnline: () => any;
            _onPluginDisconnected: (a: any) => any;
            _onRemoveListener: (a: any, b: any) => any;
            _parseProvidedToken: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_parseProvidedToken"];
            _performConnect: () => any;
            _performDisconnect: (a: any) => any;
            _processRequestArgs: (a: any) => any;
            _refreshToken: () => any;
            _runStateAwareQueues: (a: any, b: any) => any;
            _sendFireAndForgetRequest: (a: any) => any;
            _sendRequest: (a: any) => any;
            _sendRetriedRequest: (a: any, b: any) => any;
            _setAuthHeader: (a: any, b: any) => any;
            _tryExpandSpecialURL: (a: any) => any;
            _tryToReconnect: () => any;
            addPlugin: (a: any, b: any) => any;
            appendLastTokenQuery: (a: any) => any;
            appendTokenQuery: (a: any) => any;
            authenticate: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["authenticate"];
            connect: () => any;
            disconnect: () => any;
            forceDisconnect: () => any;
            forceTokenRefresh: () => any;
            getConnectionId: () => any;
            getEndpoints: () => any;
            getInitTime: () => any;
            getLastToken: () => any;
            getPluginAPI: (a: any) => any;
            handlePushRequests: (a: any, b: any, c: any) => any;
            hasOwnerRef: (a: any) => any;
            hasPlugin: (a: any) => any;
            isAuthenticated: () => any;
            isConnected: () => any;
            isOnline: () => any;
            isReconnecting: () => any;
            matchMessages: (a: any, b: any, c: any) => any;
            removeAllListeners: () => undefined;
            removePlugin: (a: any) => any;
            request: (a: any, b: any) => any;
            toPublic: (a: any) => any;
            unhandlePushRequests: (a: any, b: any, c: any) => any;
            unmatchMessages: (a: any, b: any, c: any) => any;
          } & {
            _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
            addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
            addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
            createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
            emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
            emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
            emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
            emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
            emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
            emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
            on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
            onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
            onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
            once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
            proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
            proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
            proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
            proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
            removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["removeAllListeners"];
            removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
            removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
          };
          uploaders: {
            authorized: {
              _authorize: boolean;
              _backoff: boolean;
              _endpoint: string;
              _listeners: {
                upload_failed: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
                upload_request_failed: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
                upload_succeeded: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
              };
              _metaListeners: {
                add: {};
                remove: {};
              };
              _suppressPersist: boolean;
              _transport: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"];
            } & {
              _parseUploadResponse: (a: any, b: any, c: any) => any;
              _uploadBatch: (a: any) => any;
              lastUpload: (a: any) => any;
              shouldBackoff: () => any;
              upload: (a: any) => any;
            } & {
              _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
              addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
              addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
              createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
              emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
              emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
              emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
              emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
              emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
              emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
              on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
              onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
              onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
              once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
              proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
              proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
              proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
              proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
              removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
              removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
              removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
            };
            unauthorized: {
              _authorize: boolean;
              _backoff: boolean;
              _endpoint: string;
              _listeners: {
                upload_failed: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
                upload_request_failed: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
                upload_succeeded: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
              };
              _metaListeners: {
                add: {};
                remove: {};
              };
              _suppressPersist: boolean;
              _transport: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"];
            } & {
              _parseUploadResponse: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["uploaders"]["authorized"]["_parseUploadResponse"];
              _uploadBatch: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["uploaders"]["authorized"]["_uploadBatch"];
              lastUpload: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["uploaders"]["authorized"]["lastUpload"];
              shouldBackoff: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["uploaders"]["authorized"]["shouldBackoff"];
              upload: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["uploaders"]["authorized"]["upload"];
            } & {
              _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
              addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
              addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
              createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
              emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
              emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
              emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
              emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
              emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
              emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
              on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
              onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
              onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
              once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
              proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
              proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
              proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
              proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
              removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
              removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
              removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
            };
          };
          uploadingInProgress: boolean;
          useOptimizedESS2NA: boolean;
        } & {
          buildEvent: (a: any, b: any) => any;
          commitAndUploadESStats: (a: any, b: any, c: any) => any;
          destroy: () => any;
          finalFlush: () => any;
          flush: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["flush"];
          getEvents: (a: any) => any;
          getSpecificContext: (a: any) => any;
          getStorageId: () => any;
          getStorageType: () => any;
          getVersion: () => any;
          hasContext: () => boolean;
          initSendingEvents: () => undefined;
          initializeContexts: (a: any) => any;
          isUsingESS2NAOptimization: () => any;
          lastFlush: () => Promise<any>;
          onBeforeDisconnect: () => any;
          onSuccessfullySentESStats: (a: any) => any;
          send: (a: any) => any;
          sendESS2NAWithOptimization: (a: any, b: any, c: any, d: any) => any;
          sendESStats: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["sendESStats"];
          sendEvents: (a: any) => any;
          sendToGabito: (a: any, b: any) => any;
          setupInstallationId: () => any;
          storeEvent: (a: any, b: any) => any;
          validateEventData: (a: any, b: any, c: any) => any;
        } & {
          _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
          addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
          addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
          createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
          emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
          emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
          emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
          emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
          emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
          emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
          on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
          onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
          onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
          once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
          proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
          proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
          proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
          proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
          removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
          removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
          removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
        };
        fireTrackingEvent: (a: any) => any;
      } & {
        log: (a: any, b: any, c: any) => any;
      };
      embeddedAdErrorLogger: {
        eventSender: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"];
      } & {
        log: (a: any, b: any, c: any) => any;
      };
      embeddedAdManager: {
        embeddedAdsApi: {
          adsCoreConnector: PlatformTypes["AdManagers"]["audio"]["inStreamApi"]["adsCoreConnector"];
        } & {
          createSlot: () => any;
          fetchSlot: () => any;
          getSlotSettings: () => Promise<any>;
          overrideSlotServerEndpoint: (a: any) => any;
          subscribeToSlot: (a: any) => any;
          triggerSlot: () => any;
        };
        subscription: {
          cancel: () => undefined;
        };
      } & {
        disable: () => any;
        enable: (a: any, b: any) => any;
        fetchSlot: () => any;
        triggerSlot: () => any;
      };
      embeddedNPVAdEventLogger: {
        eventSender: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"];
      } & {
        log: (a: any, b: any, c: any) => any;
      };
    };
    home: {
      enableLegacyHptoContainerLoader: boolean;
      fetchHomeAd: () => Promise<any>;
      logger: {
        appStartupId: string;
        eventSender: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"];
        fireTrackingEvent: (a: any) => any;
      } & {
        log: (a: any, b: any, c: any) => any;
      };
    };
    hpto: {
      appStartupId: string;
      createTrackingPixelImage: (a: any, b: any) => any;
      focusState: {
        listeners: Array<PlatformTypes["AdManagers"]["hpto"]>;
      } & {
        addFocusListener: PlatformTypes["AdManagers"]["adStateReporter"]["focusState"]["addFocusListener"];
        hasFocus: PlatformTypes["AdManagers"]["adStateReporter"]["focusState"]["hasFocus"];
        removeAllFocusListeners: PlatformTypes["AdManagers"]["adStateReporter"]["focusState"]["removeAllFocusListeners"];
        removeFocusListener: PlatformTypes["AdManagers"]["adStateReporter"]["focusState"]["removeFocusListener"];
      };
      handleTrackingUrl: (a: any) => any;
      hptoApi: {
        adsCoreConnector: PlatformTypes["AdManagers"]["audio"]["inStreamApi"]["adsCoreConnector"];
        esperantoPreviewParser: {
          createInteractiveIframe: (a: any) => any;
          getKeyByValue: (a: any, b: any) => any;
          handleNativeEl: (a: any) => any;
          isPreviewServiceAd: (a: any) => any;
          parsePreview: (a: any) => any;
          renameImageBannerField: (a: any) => any;
        };
        eventSender: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"];
        nativeHptoApi: {
          endpoints: {
            Album: {
              __esModule: boolean;
              getAlbum: (a: any, b: any) => any;
            };
            Artist: {
              __esModule: boolean;
              getArtist: (a: any, b: any) => any;
            };
            Playlist: {
              __esModule: boolean;
              getOnDemandPlaylists: (a: any) => any;
              getPlaylist: (a: any, b: any) => any;
            };
            Show: {
              __esModule: boolean;
              createCheckoutSession: (a: any, b: any) => any;
              getEpisode: (a: any, b: any, c: any) => any;
              getShow: (a: any, b: any, c: any) => any;
            };
            Track: {
              __esModule: boolean;
              getTrack: (a: any, b: any) => any;
            };
          };
          imageSelection: () => undefined;
          mapDefaultData: (a: any) => any;
          mapEpisode: (a: any) => any;
          mapTrack: (a: any) => any;
          spotifyTransport: {
            _RequestImplementation: (a: any, b: any, c: any) => any;
            _accessToken: string;
            _globalRequestHeaders: Array<Array<string>>;
            _locale: string;
            _market: string;
            pendingRequests: Set<any>;
          } & {
            build: () => any;
            resetPendingRequests: () => any;
          } & {
            accessToken: string;
            build: PlatformTypes["AdManagers"]["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"]["build"];
            globalRequestHeaders: PlatformTypes["AdManagers"]["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"]["_globalRequestHeaders"];
            locale: string;
            market: string;
            resetPendingRequests: PlatformTypes["AdManagers"]["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"]["resetPendingRequests"];
          };
        } & {
          getAlbum: (a: any) => any;
          getArtist: (a: any) => any;
          getEpisode: (a: any) => any;
          getPlaylist: (a: any) => any;
          getShow: (a: any) => any;
          getTrack: (a: any) => any;
        };
      } & {
        getAlbum: (a: any) => any;
        getAlgoPlaylistInfo: (a: any) => any;
        getArtist: (a: any) => any;
        getEpisode: (a: any) => any;
        getPlaylist: (a: any) => any;
        getShow: (a: any) => any;
        getSlot: (a: any) => any;
        getTrack: (a: any) => any;
        logEvent: (a: any) => any;
        subscribeToPreview: (a: any) => any;
      };
      log: (a: any) => any;
      logAdEventError: (a: any) => any;
      mapData: (a: any) => any;
      offlineObserver: {
        isOnline: boolean;
      } & {
        getOnlineStatus: () => any;
      };
      onVisibilityChanged: (a: any) => any;
      refreshCallback: () => Promise<any>;
      timeOfLastViewUpdate: number;
      trackingPixelDiv: Element;
      visibilityObserver: {
        callback: PlatformTypes["AdManagers"]["hpto"]["onVisibilityChanged"];
        currentState: string;
        intersectionObserver: {
          delay: number;
          disconnect: () => any;
          observe: (a: any) => any;
          root: null;
          rootMargin: string;
          scrollMargin: string;
          takeRecords: () => any;
          thresholds: Array<number>;
          trackVisibility: boolean;
          unobserve: (a: any) => any;
        };
        onObservation: (a: any) => any;
      } & {
        disconnect: () => any;
        observe: (a: any, b: any) => any;
      };
      visibilityState: string;
    } & {
      createTrackingList: (a: any) => any;
      fetchCreative: (a: any) => any;
      fetchTemplate: () => any;
      getNativeData: (a: any, b: any) => any;
      logErrorEvent: (a: any) => any;
      logEvent: (a: any) => any;
      logViewed: () => any;
      maybeModifyUrl: (a: any, b: any) => any;
      maybeTriggerRefresh: () => any;
      onFocusChanged: (a: any) => any;
      onRefresh: (a: any) => any;
      parseHptoMessageType: (a: any) => any;
      subscribeToPreview: (a: any) => any;
      trackPixelClicked: () => any;
      trackPixelViewed: () => any;
      viewDestroyed: () => any;
      viewRendered: (a: any) => any;
    };
    inStreamApi: PlatformTypes["AdManagers"]["audio"]["inStreamApi"];
    leaderboard: {
      adPlaybackId: null;
      appStartupId: string;
      cachedConfig: {
        displayTimeIntervalMs: number;
        timeInViewThresholdMs: number;
      };
      currentAd: {
        ad: null;
        creativeId: null;
        lineItemId: null;
      };
      enabled: boolean;
      eventSender: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"];
      fetching: boolean;
      focusState: {
        listeners: Array<any>;
      } & {
        addFocusListener: PlatformTypes["AdManagers"]["adStateReporter"]["focusState"]["addFocusListener"];
        hasFocus: PlatformTypes["AdManagers"]["adStateReporter"]["focusState"]["hasFocus"];
        removeAllFocusListeners: PlatformTypes["AdManagers"]["adStateReporter"]["focusState"]["removeAllFocusListeners"];
        removeFocusListener: PlatformTypes["AdManagers"]["adStateReporter"]["focusState"]["removeFocusListener"];
      };
      frameSrc: string;
      handleLeaderboardMessage: (a: any) => any;
      history: PlatformTypes["AdManagers"]["adStateReporter"]["history"];
      leaderboardApi: {
        adsCoreConnector: PlatformTypes["AdManagers"]["audio"]["inStreamApi"]["adsCoreConnector"];
      } & {
        coerceDisplayTimeIntervalMs: (a: any) => any;
        createAndEnableSlot: (a: any) => any;
        getConfig: () => Promise<any>;
        getSlot: (a: any) => any;
        logEvent: (a: any, b: any) => any;
        normalizeConfig: (a: any) => any;
        subscribeToSlotType: (a: any, b: any) => any;
      };
      leaderboardWrapper: null;
      offlineObserver: {
        isOnline: boolean;
      } & {
        getOnlineStatus: PlatformTypes["AdManagers"]["hpto"]["offlineObserver"]["getOnlineStatus"];
      };
      onAdSlotEvent: (a: any) => any;
      refreshDecisioner: {
        delegate: PlatformTypes["AdManagers"]["leaderboard"];
        focusState: PlatformTypes["AdManagers"]["leaderboard"]["focusState"];
        lastOnlineStatus: boolean;
        timeOfLastViewUpdate: number;
        viewTimer: number;
      } & {
        isPastViewThreshold: () => any;
        notifyRefreshIfPossible: () => Promise<any>;
        onFocusChanged: (a: any) => any;
        onLeaderboardDisabled: () => any;
        onLeaderboardEnabled: () => any;
        onNavigationChanged: () => any;
        onViewLoaded: () => Promise<any>;
        onViewUnloaded: () => any;
        onlineStateChanged: (a: any) => any;
        setRefreshDelegate: (a: any) => any;
        startRefreshTimer: () => any;
        triggerRefresh: () => any;
        updateViewTimer: () => Promise<any>;
      };
    } & {
      adToLeaderboard: (a: any) => any;
      clearCurrentAd: () => any;
      disableLeaderboard: () => any;
      disableLeaderboardMessageHandler: () => any;
      enableLeaderboard: () => any;
      enableLeaderboardMessageHandler: () => any;
      fetchAndDisplayLeaderboard: () => Promise<any>;
      getCurrentAd: () => any;
      handleBadLeaderboard: () => any;
      isCurrentAdSax: (a: any) => any;
      isPreviewServiceAd: (a: any) => any;
      logLeaderboardEvent: (a: any) => any;
      onFocusChanged: (a: any) => any;
      onNavigationChanged: () => any;
      refreshLeaderboard: () => any;
      renderLeaderboard: (a: any, b: any, c: any) => any;
      requestConfig: () => Promise<any>;
      requestSlot: (a: any) => any;
      setCurrentAd: (a: any) => any;
      setLeaderboardElement: (a: any) => any;
      teardownCurrentAd: () => any;
    };
    sponsoredPlaylist: {
      enabled: boolean;
      sponsoredPlaylistApi: {
        adsCoreConnector: PlatformTypes["AdManagers"]["audio"]["inStreamApi"]["adsCoreConnector"];
        eventSender: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"];
      } & {
        getSponsoredUris: () => Promise<any>;
        getSponsorshipAd: (a: any) => any;
        logEvent: (a: any) => any;
        subscribeToPreview: (a: any) => any;
      };
      subscription: {
        cancel: () => undefined;
      };
    } & {
      disable: () => any;
      enable: (a: any) => any;
      logEvent: (a: any) => any;
      requestSponsoredPlaylistAd: (a: any) => any;
      requestSponsoredPlaylists: () => Promise<any>;
    };
    survey: {
      logger: {
        eventSender: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"];
        inStreamApi: PlatformTypes["AdManagers"]["audio"]["inStreamApi"];
      } & {
        getAdData: () => any;
        logAdError: (a: any) => any;
        logAdEvent: (a: any) => any;
        logSurveyAdEventWithAd: (a: any) => any;
        logSurveyAdEventWithoutAd: (a: any) => any;
      };
    };
    vto: {
      factories: Array<(a: any) => any>;
      manager: {
        active: boolean;
        enabled: boolean;
        fireImpressionOnStart: boolean;
        focusState: {
          listeners: Array<PlatformTypes["AdManagers"]["vto"]["manager"]>;
        } & {
          addFocusListener: PlatformTypes["AdManagers"]["adStateReporter"]["focusState"]["addFocusListener"];
          hasFocus: PlatformTypes["AdManagers"]["adStateReporter"]["focusState"]["hasFocus"];
          removeAllFocusListeners: PlatformTypes["AdManagers"]["adStateReporter"]["focusState"]["removeAllFocusListeners"];
          removeFocusListener: PlatformTypes["AdManagers"]["adStateReporter"]["focusState"]["removeFocusListener"];
        };
        inStreamApi: PlatformTypes["AdManagers"]["audio"]["inStreamApi"];
        listener: {
          onCreated: () => undefined;
          onEnded: () => undefined;
          onFirstReady: () => undefined;
          onInfo: (a: any) => any;
          onStarted: () => undefined;
        };
        onAdMessage: PlatformTypes["AdManagers"]["audio"]["inStreamApi"]["onAdMessageCallbacks"][0];
        subscription: PlatformTypes["AdManagers"]["audio"]["inStreamApi"]["inStreamAdsSubscription"];
        videoTakeoverApi: {
          esperantoConnector: PlatformTypes["AdManagers"]["audio"]["inStreamApi"]["adsCoreConnector"];
        } & {
          patchTargeting: (a: any, b: any) => any;
          postEvent: (a: any) => any;
        };
      } & {
        disable: () => any;
        enable: (a: any) => any;
        getEnabled: () => any;
        handleApplicationGainedFocus: () => Promise<any>;
        handleApplicationLostFocus: () => Promise<any>;
        log: (a: any, b: any, c: any) => any;
        logEvent: (a: any, b: any, c: any) => any;
        onCreated: (a: any) => any;
        onEnded: (a: any, b: any) => any;
        onFocusChanged: (a: any) => any;
        onReady: () => any;
        onRender: () => any;
        onStarted: (a: any) => any;
        onStateUpdate: (a: any) => any;
        parseInfo: (a: any) => any;
        resetState: () => any;
      };
    };
  };
  AudioOutputDevicesAPI: {
    _audioObserver: {
      options: {};
      transport: {
        _onCancel: () => any;
        _onSend: () => any;
      } & {
        call: (a: any, b: any, c: any, d: any) => any;
        callSingle: (a: any) => any;
        callStream: (a: any, b: any) => any;
      };
    } & {
      getAudioOutputDevices: (a: any, b: any) => any;
    };
    _events: {
      _emitter: {
        _listeners: {
          deviceConnected: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
        };
        _metaListeners: {
          add: {};
          remove: {};
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
    } & {
      addListener: (a: any, b: any, c: any) => any;
      createEvent: (a: any, b: any) => any;
      emit: (a: any, b: any) => any;
      emitSync: (a: any, b: any) => any;
      onAddListener: (a: any, b: any) => any;
      onRemoveListener: (a: any, b: any) => any;
      removeListener: (a: any, b: any, c: any) => any;
    };
    devices: Array<{
      fullName: string;
      id: string;
      isDefaultDevice: boolean;
      name: string;
      terminalType: string;
      transportType: string;
    }>;
  } & {
    getDefaultDevice: () => any;
    getDevices: () => any;
    getEvents: () => any;
  };
  AudiobookCappingAPI: {
    _events: {
      _emitter: {
        _listeners: {};
        _metaListeners: {
          add: {};
          remove: {};
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    _fetcher: {
      _builder: PlatformTypes["AdManagers"]["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
      _inFlightPromise: null;
    } & {
      fetch: () => Promise<any>;
    };
    _status: null;
  } & {
    getCappingStatus: () => Promise<any>;
  } & {
    getCappingStatus: PlatformTypes["AudiobookCappingAPI"]["getCappingStatus"];
    getEvents: () => any;
    onUpdateCapping: (a: any) => any;
  };
  AuthorizationAPI: {
    _authorizationPlugin: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_plugins"]["desktop-lifecycle-plugin"];
    _cosmos: {
      requestFactory: () => any;
      resolver: {
        cancel: () => any;
        send: () => any;
      } & {
        onFailure: (a: any, b: any, c: any, d: any) => any;
        onSuccess: (a: any, b: any, c: any, d: any) => any;
        resolve: (a: any, b: any, c: any) => any;
      };
    } & {
      del: (a: any, b: any, c: any) => any;
      get: (a: any, b: any, c: any) => any;
      head: (a: any, b: any) => any;
      patch: (a: any, b: any, c: any) => any;
      post: (a: any) => any;
      postSub: (a: any) => any;
      put: (a: any, b: any, c: any) => any;
      request: (a: any, b: any) => any;
      resolve: (a: any, b: any) => any;
      sub: (a: any, b: any) => any;
    };
    _events: {
      _emitter: {
        _listeners: {
          update: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
        };
        _metaListeners: {
          add: {};
          remove: {};
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    _state: {
      isAuthorized: boolean;
      retryAt: {
        getDate: () => any;
        getDay: () => any;
        getFullYear: () => any;
        getHours: () => any;
        getMilliseconds: () => any;
        getMinutes: () => any;
        getMonth: () => any;
        getSeconds: () => any;
        getTime: () => any;
        getTimezoneOffset: () => any;
        getUTCDate: () => any;
        getUTCDay: () => any;
        getUTCFullYear: () => any;
        getUTCHours: () => any;
        getUTCMilliseconds: () => any;
        getUTCMinutes: () => any;
        getUTCMonth: () => any;
        getUTCSeconds: () => any;
        getYear: () => any;
        setDate: (a: any) => any;
        setFullYear: (a: any, b: any, c: any) => any;
        setHours: (a: any, b: any, c: any, d: any) => any;
        setMilliseconds: (a: any) => any;
        setMinutes: (a: any, b: any, c: any) => any;
        setMonth: (a: any, b: any) => any;
        setSeconds: (a: any, b: any) => any;
        setTime: (a: any) => any;
        setUTCDate: (a: any) => any;
        setUTCFullYear: (a: any, b: any, c: any) => any;
        setUTCHours: (a: any, b: any, c: any, d: any) => any;
        setUTCMilliseconds: (a: any) => any;
        setUTCMinutes: (a: any, b: any, c: any) => any;
        setUTCMonth: (a: any, b: any) => any;
        setUTCSeconds: (a: any, b: any) => any;
        setYear: (a: any) => any;
        toDateString: () => any;
        toGMTString: () => any;
        toISOString: () => any;
        toJSON: (a: any) => any;
        toLocaleDateString: () => any;
        toLocaleString: () => any;
        toLocaleTimeString: () => any;
        toString: () => any;
        toTimeString: () => any;
        toUTCString: PlatformTypes["AuthorizationAPI"]["_state"]["retryAt"]["toGMTString"];
        valueOf: () => any;
      };
      retryAttempt: number;
      token: null;
    };
    _tokenProvider: {
      _callbackResponses: Array<any>;
      _callbacks: Array<(a: any) => any>;
      _esperantoTransport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
      _promise: Promise<any>;
      _token: {
        accessToken: string;
        accessTokenExpirationTimestampMs: number;
        isAnonymous: boolean;
        tokenType: string;
      };
    } & {
      loadToken: () => Promise<any>;
    } & {
      addOnNewTokenResponse: (a: any) => any;
      addOnTokenChanged: (a: any) => any;
      getToken: () => Promise<any>;
    };
    onAuthenticationFailed: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_plugins"]["desktop-lifecycle-plugin"]["_onAuthenticationFailed"][0];
    onTokenChanged: PlatformTypes["AuthorizationAPI"]["_tokenProvider"]["_callbacks"][0];
  } & {
    getCapabilities: () => {
      canGetSessionTransferURL: boolean;
    };
    getEvents: () => any;
    getSessionTransferURL: (a: any) => any;
    getState: () => any;
    onAuthenticationFailed: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_plugins"]["desktop-lifecycle-plugin"]["_onAuthenticationFailed"][0];
    onTokenChanged: PlatformTypes["AuthorizationAPI"]["_tokenProvider"]["_callbacks"][0];
    tryAuthorize: () => any;
  };
  BuddyFeedAPI: {
    batchAPI: {
      presence2: {
        builder: PlatformTypes["AdManagers"]["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
        pubsub: {
          _connectionId: Promise<any>;
          _events: {
            _emitter: {
              _listeners: {};
              _metaListeners: {
                add: {};
                remove: {};
              };
            } & {
              _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
              addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
              addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
              createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
              emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
              emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
              emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
              emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
              emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
              emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
              on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
              onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
              onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
              once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
              proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
              proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
              proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
              proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
              removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
              removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
              removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
            };
          } & {
            addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
            createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
            emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
            emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
            onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
            onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
            removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
          };
          _isDeveloperMode: boolean;
          _messages: Array<any>;
          _subscribeToConnectionId: (a: any) => any;
          _subscribeToMessages: (a: any, b: any, c: any) => any;
          _subscriptions: Map<any, any>;
        } & {
          cancelSubscription: (a: any) => any;
          createSubscription: (a: any, b: any, c: any) => any;
          getConnectionId: () => any;
          getEvents: () => any;
          getMessages: () => any;
          getSubscriptions: () => any;
          onConnectionId: (a: any) => any;
          refreshSubscription: (a: any, b: any) => any;
          subscribe: (a: any) => any;
        };
      } & {
        subscribeToBuddyActivity: (a: any, b: any) => any;
        unsubscribeFromBuddiesActivity: (a: any, b: any) => any;
      };
      presenceView: {
        builder: PlatformTypes["AdManagers"]["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
      } & {
        getBuddyActivity: (a: any) => any;
        getBuddyFeed: () => any;
        getBuddyFeedWithSubscribing: (a: any) => any;
      };
      pubsub: PlatformTypes["BuddyFeedAPI"]["batchAPI"]["presence2"]["pubsub"];
      subscription: Set<any>;
    } & {
      subscribe: (a: any, b: any, c: any) => any;
      unsubscribe: (a: any) => any;
    };
    presence2: {
      builder: PlatformTypes["AdManagers"]["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
      pubsub: PlatformTypes["BuddyFeedAPI"]["batchAPI"]["presence2"]["pubsub"];
    } & {
      subscribeToBuddyActivity: PlatformTypes["BuddyFeedAPI"]["batchAPI"]["presence2"]["subscribeToBuddyActivity"];
      unsubscribeFromBuddiesActivity: PlatformTypes["BuddyFeedAPI"]["batchAPI"]["presence2"]["unsubscribeFromBuddiesActivity"];
    };
    presenceView: {
      builder: PlatformTypes["AdManagers"]["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
    } & {
      getBuddyActivity: PlatformTypes["BuddyFeedAPI"]["batchAPI"]["presenceView"]["getBuddyActivity"];
      getBuddyFeed: PlatformTypes["BuddyFeedAPI"]["batchAPI"]["presenceView"]["getBuddyFeed"];
      getBuddyFeedWithSubscribing: PlatformTypes["BuddyFeedAPI"]["batchAPI"]["presenceView"]["getBuddyFeedWithSubscribing"];
    };
  } & {
    fetchFriendActivity: (a: any) => any;
    fetchFriendActivityByUsername: (a: any) => any;
    fetchFriendActivityWithSubscriptions: (a: any, b: any, c: any) => any;
    getCapabilities: () => {
      isSupported: boolean;
    };
    subscribeToBuddyActivity: (a: any, b: any) => any;
  };
  ClipboardAPI: {
    _cosmos: PlatformTypes["AuthorizationAPI"]["_cosmos"];
  } & {
    copy: (a: any) => any;
    paste: () => Promise<any>;
  };
  CollectionPlatformAPI: {
    _service: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      add: (a: any, b: any) => any;
      contains: (a: any, b: any) => any;
      get: (a: any, b: any) => any;
      remove: (a: any, b: any) => any;
      streamContains: (a: any, b: any) => any;
      streamGet: (a: any, b: any) => any;
    };
    cacheBySet: {
      artist: {
        _cache: Map<any, any>;
        _ttl: number;
      } & {
        cleanup: () => any;
        clear: () => any;
        create: (a: any, b: any) => any;
        delete: (a: any) => any;
        entries: () => any;
        get: (a: any) => any;
        getExpiry: () => any;
        has: (a: any) => any;
        isExpired: (a: any) => any;
        peek: (a: any) => any;
        set: (a: any, b: any) => any;
      };
      artistban: {
        _cache: Map<any, any>;
        _ttl: number;
      } & {
        cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
        clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
        create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
        delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
        entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
        get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
        getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
        has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
        isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
        peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
        set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
      };
      author: {
        _cache: Map<any, any>;
        _ttl: number;
      } & {
        cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
        clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
        create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
        delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
        entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
        get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
        getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
        has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
        isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
        peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
        set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
      };
      ban: {
        _cache: Map<any, any>;
        _ttl: number;
      } & {
        cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
        clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
        create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
        delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
        entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
        get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
        getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
        has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
        isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
        peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
        set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
      };
      collection: {
        _cache: Map<any, any>;
        _ttl: number;
      } & {
        cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
        clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
        create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
        delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
        entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
        get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
        getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
        has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
        isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
        peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
        set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
      };
      enhanced: {
        _cache: Map<any, any>;
        _ttl: number;
      } & {
        cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
        clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
        create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
        delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
        entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
        get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
        getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
        has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
        isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
        peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
        set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
      };
      ignoreinrecs: {
        _cache: Map<any, any>;
        _ttl: number;
      } & {
        cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
        clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
        create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
        delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
        entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
        get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
        getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
        has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
        isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
        peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
        set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
      };
      listenlater: {
        _cache: Map<any, any>;
        _ttl: number;
      } & {
        cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
        clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
        create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
        delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
        entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
        get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
        getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
        has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
        isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
        peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
        set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
      };
      markedasfinished: {
        _cache: Map<any, any>;
        _ttl: number;
      } & {
        cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
        clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
        create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
        delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
        entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
        get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
        getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
        has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
        isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
        peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
        set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
      };
      notinterested: {
        _cache: Map<any, any>;
        _ttl: number;
      } & {
        cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
        clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
        create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
        delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
        entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
        get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
        getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
        has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
        isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
        peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
        set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
      };
      prerelease: {
        _cache: Map<any, any>;
        _ttl: number;
      } & {
        cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
        clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
        create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
        delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
        entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
        get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
        getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
        has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
        isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
        peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
        set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
      };
      show: {
        _cache: Map<any, any>;
        _ttl: number;
      } & {
        cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
        clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
        create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
        delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
        entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
        get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
        getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
        has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
        isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
        peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
        set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
      };
      tags: {
        _cache: Map<any, any>;
        _ttl: number;
      } & {
        cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
        clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
        create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
        delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
        entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
        get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
        getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
        has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
        isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
        peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
        set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
      };
      ylpin: {
        _cache: Map<any, any>;
        _ttl: number;
      } & {
        cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
        clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
        create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
        delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
        entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
        get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
        getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
        has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
        isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
        peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
        set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
      };
    };
    events: {
      _aggregatorByCollection2Set: {
        artist: {
          _additions: {
            clear: () => any;
            delete: (a: any) => any;
            entries: () => any;
            forEach: (a: any) => any;
            get: (a: any) => any;
            has: (a: any) => any;
            keys: () => any;
            set: (a: any, b: any) => any;
            size: number;
            values: () => any;
          };
          _batch: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _deletions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _onAdd: (a: any, b: any) => any;
          _onBatch: (a: any) => any;
          _onRemove: (a: any, b: any) => any;
          _onUpdate: (a: any, b: any, c: any) => any;
          _timeout: number;
          _timeoutId: null;
        } & {
          getBatch: () => any;
          onUpdate: () => any;
          scheduleUpdate: () => any;
          subscribe: (a: any, b: any) => any;
          unsubscribe: (a: any, b: any) => any;
        };
        artistban: {
          _additions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _batch: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _deletions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _onAdd: (a: any, b: any) => any;
          _onBatch: (a: any) => any;
          _onRemove: (a: any, b: any) => any;
          _onUpdate: (a: any, b: any, c: any) => any;
          _timeout: number;
          _timeoutId: null;
        } & {
          getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
          onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
          scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
          subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
          unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
        };
        author: {
          _additions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _batch: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _deletions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _onAdd: (a: any, b: any) => any;
          _onBatch: (a: any) => any;
          _onRemove: (a: any, b: any) => any;
          _onUpdate: (a: any, b: any, c: any) => any;
          _timeout: number;
          _timeoutId: null;
        } & {
          getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
          onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
          scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
          subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
          unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
        };
        ban: {
          _additions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _batch: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _deletions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _onAdd: (a: any, b: any) => any;
          _onBatch: (a: any) => any;
          _onRemove: (a: any, b: any) => any;
          _onUpdate: (a: any, b: any, c: any) => any;
          _timeout: number;
          _timeoutId: null;
        } & {
          getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
          onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
          scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
          subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
          unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
        };
        collection: {
          _additions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _batch: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _deletions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _onAdd: (a: any, b: any) => any;
          _onBatch: (a: any) => any;
          _onRemove: (a: any, b: any) => any;
          _onUpdate: (a: any, b: any, c: any) => any;
          _timeout: number;
          _timeoutId: null;
        } & {
          getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
          onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
          scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
          subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
          unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
        };
        enhanced: {
          _additions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _batch: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _deletions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _onAdd: (a: any, b: any) => any;
          _onBatch: (a: any) => any;
          _onRemove: (a: any, b: any) => any;
          _onUpdate: (a: any, b: any, c: any) => any;
          _timeout: number;
          _timeoutId: null;
        } & {
          getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
          onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
          scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
          subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
          unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
        };
        ignoreinrecs: {
          _additions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _batch: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _deletions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _onAdd: (a: any, b: any) => any;
          _onBatch: (a: any) => any;
          _onRemove: (a: any, b: any) => any;
          _onUpdate: (a: any, b: any, c: any) => any;
          _timeout: number;
          _timeoutId: null;
        } & {
          getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
          onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
          scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
          subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
          unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
        };
        listenlater: {
          _additions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _batch: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _deletions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _onAdd: (a: any, b: any) => any;
          _onBatch: (a: any) => any;
          _onRemove: (a: any, b: any) => any;
          _onUpdate: (a: any, b: any, c: any) => any;
          _timeout: number;
          _timeoutId: null;
        } & {
          getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
          onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
          scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
          subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
          unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
        };
        markedasfinished: {
          _additions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _batch: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _deletions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _onAdd: (a: any, b: any) => any;
          _onBatch: (a: any) => any;
          _onRemove: (a: any, b: any) => any;
          _onUpdate: (a: any, b: any, c: any) => any;
          _timeout: number;
          _timeoutId: null;
        } & {
          getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
          onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
          scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
          subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
          unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
        };
        notinterested: {
          _additions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _batch: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _deletions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _onAdd: (a: any, b: any) => any;
          _onBatch: (a: any) => any;
          _onRemove: (a: any, b: any) => any;
          _onUpdate: (a: any, b: any, c: any) => any;
          _timeout: number;
          _timeoutId: null;
        } & {
          getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
          onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
          scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
          subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
          unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
        };
        prerelease: {
          _additions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _batch: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _deletions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _onAdd: (a: any, b: any) => any;
          _onBatch: (a: any) => any;
          _onRemove: (a: any, b: any) => any;
          _onUpdate: (a: any, b: any, c: any) => any;
          _timeout: number;
          _timeoutId: null;
        } & {
          getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
          onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
          scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
          subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
          unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
        };
        show: {
          _additions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _batch: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _deletions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _onAdd: (a: any, b: any) => any;
          _onBatch: (a: any) => any;
          _onRemove: (a: any, b: any) => any;
          _onUpdate: (a: any, b: any, c: any) => any;
          _timeout: number;
          _timeoutId: null;
        } & {
          getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
          onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
          scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
          subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
          unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
        };
        tags: {
          _additions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _batch: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _deletions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _onAdd: (a: any, b: any) => any;
          _onBatch: (a: any) => any;
          _onRemove: (a: any, b: any) => any;
          _onUpdate: (a: any, b: any, c: any) => any;
          _timeout: number;
          _timeoutId: null;
        } & {
          getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
          onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
          scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
          subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
          unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
        };
        ylpin: {
          _additions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _batch: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _deletions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _onAdd: (a: any, b: any) => any;
          _onBatch: (a: any) => any;
          _onRemove: (a: any, b: any) => any;
          _onUpdate: (a: any, b: any, c: any) => any;
          _timeout: number;
          _timeoutId: null;
        } & {
          getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
          onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
          scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
          subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
          unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
        };
      };
      _cacheBySet: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"];
      _containsCancelFunctionByCollection2Set: {
        artistban: () => undefined;
      };
      _emitter: {
        _listeners: {
          added: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
          removed: Array<{
            listener: PlatformTypes["CollectionPlatformAPI"]["events"]["_emitter"]["_listeners"]["added"][0]["listener"];
            options: {};
          }>;
          update_item: Array<{
            listener: (a: any) => any;
            options: {
              set: string;
              uri: string;
            };
          }>;
        };
        _metaListeners: {
          add: {
            update_item: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
          };
          remove: {
            update_item: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
          };
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
      _subscribeContains: (a: any, b: any, c: any) => any;
    } & {
      emitUpdateItems: (a: any, b: any, c: any) => any;
      onBatchChanged: (a: any, b: any) => any;
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
  } & {
    add: (a: any, b: any) => any;
    contains: (a: any, b: any) => any;
    containsSync: (a: any, b: any) => any;
    get: (a: any) => any;
    getEvents: () => any;
    remove: (a: any, b: any) => any;
    subscribe: (a: any, b: any) => any;
    subscribeContains: (a: any, b: any, c: any) => any;
  };
  ConnectAPI: {
    checkDeviceId: (a: any) => any;
    connectServiceClient: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      becomeInactive: (a: any, b: any) => any;
      cancelTransfer: (a: any, b: any) => any;
      forceDiscover: (a: any, b: any) => any;
      getDebugLevel: (a: any, b: any) => any;
      getDeviceSettings: (a: any, b: any) => any;
      installSpotify: (a: any, b: any) => any;
      logout: (a: any, b: any) => any;
      notifyAudioRouteChanged: (a: any, b: any) => any;
      performDiscovery: (a: any, b: any) => any;
      pickerOpened: (a: any, b: any) => any;
      pull: (a: any, b: any) => any;
      refreshCluster: (a: any, b: any) => any;
      rename: (a: any, b: any) => any;
      sendCommand: (a: any, b: any) => any;
      setDebugLevel: (a: any, b: any) => any;
      setDeviceStreamQuality: (a: any, b: any) => any;
      setPreferredZeroconf: (a: any, b: any) => any;
      startDiscovery: (a: any, b: any) => any;
      state: (a: any, b: any) => any;
      transfer: (a: any, b: any) => any;
      wakeSleepingClusterDevices: (a: any, b: any) => any;
    };
    events: {
      _emitter: {
        _listeners: {
          update: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
        };
        _metaListeners: {
          add: {};
          remove: {};
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
      connectServiceClient: PlatformTypes["ConnectAPI"]["connectServiceClient"];
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    mapIncarnationToLoginType: (a: any) => any;
    state: {
      activeDevice: {
        brandDisplayName: string;
        connectStateId: string;
        currentState: string;
        disabledReason: string;
        id: string;
        incarnation: {
          available: Array<any>;
          preferred: undefined;
        };
        isActive: boolean;
        isConnecting: boolean;
        isDisabled: boolean;
        isGroup: boolean;
        isLocal: boolean;
        isLocalNetwork: boolean;
        isWebApp: boolean;
        isZeroconf: boolean;
        license: string;
        losslessSupport: {
          deviceSupported: boolean;
          fullySupported: boolean;
          userEligible: boolean;
        };
        modelDisplayName: string;
        name: string;
        supportedMediaTypes: Set<any>;
        supportsDJNarration: boolean;
        supportsLogout: boolean;
        supportsRemoteSleepTimer: boolean;
        type: string;
        volume: number;
      };
      connectingDevice: null;
      connectionStatus: string;
      devices: Array<PlatformTypes["ConnectAPI"]["state"]["activeDevice"]>;
    };
  } & {
    createLoggingParams: (a: any) => any;
    getCapabilities: () => {
      supportsLocalDiscovery: boolean;
    };
    getEvents: () => any;
    getState: () => any;
    initiateLocalDiscovery: () => Promise<any>;
    logout: (a: any) => any;
    pullToLocal: (a: any) => any;
    setPreferredIncarnation: (a: any, b: any) => any;
    transferPlayback: (a: any, b: any) => any;
    transferToRemote: (a: any, b: any) => any;
    updateListOfDevices: () => Promise<any>;
  };
  ConnectDeviceManagementAPI: {
    checkDeviceId: (a: any) => any;
    connectServiceClient: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      becomeInactive: PlatformTypes["ConnectAPI"]["connectServiceClient"]["becomeInactive"];
      cancelTransfer: PlatformTypes["ConnectAPI"]["connectServiceClient"]["cancelTransfer"];
      forceDiscover: PlatformTypes["ConnectAPI"]["connectServiceClient"]["forceDiscover"];
      getDebugLevel: PlatformTypes["ConnectAPI"]["connectServiceClient"]["getDebugLevel"];
      getDeviceSettings: PlatformTypes["ConnectAPI"]["connectServiceClient"]["getDeviceSettings"];
      installSpotify: PlatformTypes["ConnectAPI"]["connectServiceClient"]["installSpotify"];
      logout: PlatformTypes["ConnectAPI"]["connectServiceClient"]["logout"];
      notifyAudioRouteChanged: PlatformTypes["ConnectAPI"]["connectServiceClient"]["notifyAudioRouteChanged"];
      performDiscovery: PlatformTypes["ConnectAPI"]["connectServiceClient"]["performDiscovery"];
      pickerOpened: PlatformTypes["ConnectAPI"]["connectServiceClient"]["pickerOpened"];
      pull: PlatformTypes["ConnectAPI"]["connectServiceClient"]["pull"];
      refreshCluster: PlatformTypes["ConnectAPI"]["connectServiceClient"]["refreshCluster"];
      rename: PlatformTypes["ConnectAPI"]["connectServiceClient"]["rename"];
      sendCommand: PlatformTypes["ConnectAPI"]["connectServiceClient"]["sendCommand"];
      setDebugLevel: PlatformTypes["ConnectAPI"]["connectServiceClient"]["setDebugLevel"];
      setDeviceStreamQuality: PlatformTypes["ConnectAPI"]["connectServiceClient"]["setDeviceStreamQuality"];
      setPreferredZeroconf: PlatformTypes["ConnectAPI"]["connectServiceClient"]["setPreferredZeroconf"];
      startDiscovery: PlatformTypes["ConnectAPI"]["connectServiceClient"]["startDiscovery"];
      state: PlatformTypes["ConnectAPI"]["connectServiceClient"]["state"];
      transfer: PlatformTypes["ConnectAPI"]["connectServiceClient"]["transfer"];
      wakeSleepingClusterDevices: PlatformTypes["ConnectAPI"]["connectServiceClient"]["wakeSleepingClusterDevices"];
    };
    mapIncarnationToLoginType: (a: any) => any;
  } & {
    logout: (a: any) => any;
    setPreferredIncarnation: (a: any, b: any) => any;
  };
  ConnectDevicesAPI: {
    connectRestrictor: {
      connectRestrictions: {
        localStorageAPI: {
          _events: {
            _emitter: {
              _listeners: {
                update: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
              };
              _metaListeners: {
                add: {};
                remove: {};
              };
            } & {
              _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
              addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
              addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
              createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
              emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
              emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
              emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
              emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
              emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
              emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
              on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
              onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
              onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
              once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
              proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
              proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
              proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
              proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
              removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
              removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
              removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
            };
          } & {
            addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
            createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
            emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
            emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
            onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
            onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
            removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
          };
          auto_cleanup: boolean;
          items: {
            "vcnhj1hh3xe940gk8lmerf3y5:canvasVideosEnabled": boolean;
            "vcnhj1hh3xe940gk8lmerf3y5:cinema-media-preference": string;
            "vcnhj1hh3xe940gk8lmerf3y5:connect-nudge-triggered-at": string;
            "vcnhj1hh3xe940gk8lmerf3y5:fusionSearchHistory": Array<any>;
            "vcnhj1hh3xe940gk8lmerf3y5:homePins": string;
            "vcnhj1hh3xe940gk8lmerf3y5:isPlaybackBarRemainingTimeToggled": boolean;
            "vcnhj1hh3xe940gk8lmerf3y5:items-view": number;
            "vcnhj1hh3xe940gk8lmerf3y5:items-view-fullscreen": number;
            "vcnhj1hh3xe940gk8lmerf3y5:lastVisitedLocation": string;
            "vcnhj1hh3xe940gk8lmerf3y5:left-sidebar-default-state-width": number;
            "vcnhj1hh3xe940gk8lmerf3y5:left-sidebar-expanded-state-width": number;
            "vcnhj1hh3xe940gk8lmerf3y5:left-sidebar-state": number;
            "vcnhj1hh3xe940gk8lmerf3y5:library-row-mode": null;
            "vcnhj1hh3xe940gk8lmerf3y5:lintHtmlWithCss": boolean;
            "vcnhj1hh3xe940gk8lmerf3y5:onboarding-checklist": {
              completed: {};
            };
            "vcnhj1hh3xe940gk8lmerf3y5:onboarding-checklist-completed-at": null;
            "vcnhj1hh3xe940gk8lmerf3y5:opened-folder-uri": string;
            "vcnhj1hh3xe940gk8lmerf3y5:panel-width": number;
            "vcnhj1hh3xe940gk8lmerf3y5:playbackSpeed": number;
            "vcnhj1hh3xe940gk8lmerf3y5:queue-view": string;
            "vcnhj1hh3xe940gk8lmerf3y5:remote-config-overrides": {
              betamaxSdkDataSaverV2: boolean;
              betamaxUsePendingStorage: boolean;
              canYourDJUserBeConvertedToPremium: boolean;
              embeddedAdsPrioritizeCanvas: boolean;
              enableAboutRecsDisclosure: boolean;
              enableAdaptiveTitleEntities: boolean;
              enableAudiobookAdExclusivity: boolean;
              enableAudiobookCardPlayButton: boolean;
              enableAuthorPage: boolean;
              enableAutoSeekToVideoBufferedStartPosition: boolean;
              enableBetamaxSdkSubtitlesDesktopX: boolean;
              enableBetamaxSdkVideoOnVideoSai: boolean;
              enableBetamaxSdkVmp: boolean;
              enableCanvasAds: boolean;
              enableConcertDistanceRadius: boolean;
              enableConcertsNearYou: boolean;
              enableConcertsNotInterested: boolean;
              enableConcertsReportIssue: boolean;
              enableContextualTrackBans: boolean;
              enableCreateButton: string;
              enableDesktopMusicLeavebehinds: boolean;
              enableEmbeddedNpvAds: boolean;
              enableEqualizer: boolean;
              enableEsperantoMigrationLeaderboard: boolean;
              enableEventsInYourLibrary: boolean;
              enableFeedBaselineAudioPreviews: boolean;
              enableFeedBaselineTranscripts: boolean;
              enableFeedBaselineVideoPreviews: boolean;
              enableFullscreenLibrary: boolean;
              enableFullscreenMode: boolean;
              enableImprovedCinemaModeCanvas: boolean;
              enableImprovedCinemaModeScrollCards: boolean;
              enableJamNearbyJoining: boolean;
              enableLikedSongsFilterTags: boolean;
              enableLyricsScrollToCurrentLineButton: boolean;
              enableLyricsUpsell: boolean;
              enableMandalorianEasterEgg: string;
              enableNavigateToGalleryFromConceptPill: boolean;
              enableNearbyJams: boolean;
              enableNewDevicePicker: boolean;
              enableNewShuffleModeOrder: boolean;
              enableNpvAboutPodcast: boolean;
              enableNpvCreditsImpressions: boolean;
              enablePiPMiniPlayer: boolean;
              enablePiPMiniPlayerVideo: boolean;
              enablePlaybackBarAnimation: boolean;
              enablePremiumPage: boolean;
              enablePushCinemaModeStateToHistory: boolean;
              enableReactQueryPersistence: boolean;
              enableReportAudiobookAuthors: boolean;
              enableShowLeavebehindConsolidation: boolean;
              enableSixteenByNineCoverImages: boolean;
              enableSmartShuffle: boolean;
              enableStaticImage2Optimizer: boolean;
              enableUserCommentsForEpisodes: boolean;
              enableVenuePages: boolean;
              enableViewMode: boolean;
              enableWatchFeed: boolean;
              enableWatchFeedEntityPages: boolean;
              enableYLXPrereleaseAlbums: boolean;
            };
            "vcnhj1hh3xe940gk8lmerf3y5:smart-shuffle-menu": number;
            "vcnhj1hh3xe940gk8lmerf3y5:toggleNowPlayingView": boolean;
            "vcnhj1hh3xe940gk8lmerf3y5:ui.right_sidebar_content": string;
            "vcnhj1hh3xe940gk8lmerf3y5:ylx-active-filter-ids": {};
            "vcnhj1hh3xe940gk8lmerf3y5:ylx-active-sort-order-by-filter-id": {};
            "vcnhj1hh3xe940gk8lmerf3y5:ylx-default-state-nav-bar-width": number;
            "vcnhj1hh3xe940gk8lmerf3y5:ylx-expanded-folders": Array<any>;
            "vcnhj1hh3xe940gk8lmerf3y5:ylx-expanded-state-nav-bar-width": number;
            "vcnhj1hh3xe940gk8lmerf3y5:ylx-sort-order-and-direction-by-filter-id": {};
          };
          max_retries: number;
          namespace: string;
        } & {
          clearItem: (a: any) => any;
          createNamespacedKey: (a: any) => any;
          getEvents: () => any;
          getItem: (a: any) => any;
          listenToStorageEvents: () => undefined;
          parseLocalStorageValue: (a: any, b: any) => any;
          setItem: (a: any, b: any) => any;
          setItemInternal: (a: any, b: any, c: any) => any;
          toggleItemsTypeAndCleanup: () => undefined;
        };
      } & {
        getRestrictionState: () => any;
        restrict: (a: any) => any;
      };
    } & {
      updateRestrictedListOfDevices: (a: any) => any;
    };
    events: {
      _emitter: {
        _listeners: {
          update: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
        };
        _metaListeners: {
          add: {};
          remove: {};
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
      connectServiceClient: {
        options: {};
        transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
      } & {
        becomeInactive: PlatformTypes["ConnectAPI"]["connectServiceClient"]["becomeInactive"];
        cancelTransfer: PlatformTypes["ConnectAPI"]["connectServiceClient"]["cancelTransfer"];
        forceDiscover: PlatformTypes["ConnectAPI"]["connectServiceClient"]["forceDiscover"];
        getDebugLevel: PlatformTypes["ConnectAPI"]["connectServiceClient"]["getDebugLevel"];
        getDeviceSettings: PlatformTypes["ConnectAPI"]["connectServiceClient"]["getDeviceSettings"];
        installSpotify: PlatformTypes["ConnectAPI"]["connectServiceClient"]["installSpotify"];
        logout: PlatformTypes["ConnectAPI"]["connectServiceClient"]["logout"];
        notifyAudioRouteChanged: PlatformTypes["ConnectAPI"]["connectServiceClient"]["notifyAudioRouteChanged"];
        performDiscovery: PlatformTypes["ConnectAPI"]["connectServiceClient"]["performDiscovery"];
        pickerOpened: PlatformTypes["ConnectAPI"]["connectServiceClient"]["pickerOpened"];
        pull: PlatformTypes["ConnectAPI"]["connectServiceClient"]["pull"];
        refreshCluster: PlatformTypes["ConnectAPI"]["connectServiceClient"]["refreshCluster"];
        rename: PlatformTypes["ConnectAPI"]["connectServiceClient"]["rename"];
        sendCommand: PlatformTypes["ConnectAPI"]["connectServiceClient"]["sendCommand"];
        setDebugLevel: PlatformTypes["ConnectAPI"]["connectServiceClient"]["setDebugLevel"];
        setDeviceStreamQuality: PlatformTypes["ConnectAPI"]["connectServiceClient"]["setDeviceStreamQuality"];
        setPreferredZeroconf: PlatformTypes["ConnectAPI"]["connectServiceClient"]["setPreferredZeroconf"];
        startDiscovery: PlatformTypes["ConnectAPI"]["connectServiceClient"]["startDiscovery"];
        state: PlatformTypes["ConnectAPI"]["connectServiceClient"]["state"];
        transfer: PlatformTypes["ConnectAPI"]["connectServiceClient"]["transfer"];
        wakeSleepingClusterDevices: PlatformTypes["ConnectAPI"]["connectServiceClient"]["wakeSleepingClusterDevices"];
      };
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    state: {
      activeDevice: {
        brandDisplayName: string;
        connectStateId: string;
        currentState: string;
        disabledReason: string;
        id: string;
        incarnation: {
          available: Array<any>;
          preferred: undefined;
        };
        isActive: boolean;
        isConnecting: boolean;
        isDisabled: boolean;
        isGroup: boolean;
        isLocal: boolean;
        isLocalNetwork: boolean;
        isWebApp: boolean;
        isZeroconf: boolean;
        license: string;
        losslessSupport: {
          deviceSupported: boolean;
          fullySupported: boolean;
          userEligible: boolean;
        };
        modelDisplayName: string;
        name: string;
        supportedMediaTypes: Set<any>;
        supportsDJNarration: boolean;
        supportsLogout: boolean;
        supportsRemoteSleepTimer: boolean;
        type: string;
        volume: number;
      };
      connectingDevice: null;
      connectionStatus: string;
      devices: Array<PlatformTypes["ConnectDevicesAPI"]["state"]["activeDevice"]>;
    };
  } & {
    getActiveDevice: () => any;
    getConnectState: () => any;
    getDevices: () => any;
    getEvents: () => any;
  };
  ConnectDiscoveryAPI: {
    connectServiceClient: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      becomeInactive: PlatformTypes["ConnectAPI"]["connectServiceClient"]["becomeInactive"];
      cancelTransfer: PlatformTypes["ConnectAPI"]["connectServiceClient"]["cancelTransfer"];
      forceDiscover: PlatformTypes["ConnectAPI"]["connectServiceClient"]["forceDiscover"];
      getDebugLevel: PlatformTypes["ConnectAPI"]["connectServiceClient"]["getDebugLevel"];
      getDeviceSettings: PlatformTypes["ConnectAPI"]["connectServiceClient"]["getDeviceSettings"];
      installSpotify: PlatformTypes["ConnectAPI"]["connectServiceClient"]["installSpotify"];
      logout: PlatformTypes["ConnectAPI"]["connectServiceClient"]["logout"];
      notifyAudioRouteChanged: PlatformTypes["ConnectAPI"]["connectServiceClient"]["notifyAudioRouteChanged"];
      performDiscovery: PlatformTypes["ConnectAPI"]["connectServiceClient"]["performDiscovery"];
      pickerOpened: PlatformTypes["ConnectAPI"]["connectServiceClient"]["pickerOpened"];
      pull: PlatformTypes["ConnectAPI"]["connectServiceClient"]["pull"];
      refreshCluster: PlatformTypes["ConnectAPI"]["connectServiceClient"]["refreshCluster"];
      rename: PlatformTypes["ConnectAPI"]["connectServiceClient"]["rename"];
      sendCommand: PlatformTypes["ConnectAPI"]["connectServiceClient"]["sendCommand"];
      setDebugLevel: PlatformTypes["ConnectAPI"]["connectServiceClient"]["setDebugLevel"];
      setDeviceStreamQuality: PlatformTypes["ConnectAPI"]["connectServiceClient"]["setDeviceStreamQuality"];
      setPreferredZeroconf: PlatformTypes["ConnectAPI"]["connectServiceClient"]["setPreferredZeroconf"];
      startDiscovery: PlatformTypes["ConnectAPI"]["connectServiceClient"]["startDiscovery"];
      state: PlatformTypes["ConnectAPI"]["connectServiceClient"]["state"];
      transfer: PlatformTypes["ConnectAPI"]["connectServiceClient"]["transfer"];
      wakeSleepingClusterDevices: PlatformTypes["ConnectAPI"]["connectServiceClient"]["wakeSleepingClusterDevices"];
    };
  } & {
    startActiveDiscovery: () => Promise<any>;
  };
  ConnectRestrictionStateAPI: PlatformTypes["ConnectDevicesAPI"]["connectRestrictor"]["connectRestrictions"];
  ConnectRestrictionsAPI: PlatformTypes["ConnectDevicesAPI"]["connectRestrictor"]["connectRestrictions"];
  ConnectTransferAPI: {
    connectServiceClient: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      becomeInactive: PlatformTypes["ConnectAPI"]["connectServiceClient"]["becomeInactive"];
      cancelTransfer: PlatformTypes["ConnectAPI"]["connectServiceClient"]["cancelTransfer"];
      forceDiscover: PlatformTypes["ConnectAPI"]["connectServiceClient"]["forceDiscover"];
      getDebugLevel: PlatformTypes["ConnectAPI"]["connectServiceClient"]["getDebugLevel"];
      getDeviceSettings: PlatformTypes["ConnectAPI"]["connectServiceClient"]["getDeviceSettings"];
      installSpotify: PlatformTypes["ConnectAPI"]["connectServiceClient"]["installSpotify"];
      logout: PlatformTypes["ConnectAPI"]["connectServiceClient"]["logout"];
      notifyAudioRouteChanged: PlatformTypes["ConnectAPI"]["connectServiceClient"]["notifyAudioRouteChanged"];
      performDiscovery: PlatformTypes["ConnectAPI"]["connectServiceClient"]["performDiscovery"];
      pickerOpened: PlatformTypes["ConnectAPI"]["connectServiceClient"]["pickerOpened"];
      pull: PlatformTypes["ConnectAPI"]["connectServiceClient"]["pull"];
      refreshCluster: PlatformTypes["ConnectAPI"]["connectServiceClient"]["refreshCluster"];
      rename: PlatformTypes["ConnectAPI"]["connectServiceClient"]["rename"];
      sendCommand: PlatformTypes["ConnectAPI"]["connectServiceClient"]["sendCommand"];
      setDebugLevel: PlatformTypes["ConnectAPI"]["connectServiceClient"]["setDebugLevel"];
      setDeviceStreamQuality: PlatformTypes["ConnectAPI"]["connectServiceClient"]["setDeviceStreamQuality"];
      setPreferredZeroconf: PlatformTypes["ConnectAPI"]["connectServiceClient"]["setPreferredZeroconf"];
      startDiscovery: PlatformTypes["ConnectAPI"]["connectServiceClient"]["startDiscovery"];
      state: PlatformTypes["ConnectAPI"]["connectServiceClient"]["state"];
      transfer: PlatformTypes["ConnectAPI"]["connectServiceClient"]["transfer"];
      wakeSleepingClusterDevices: PlatformTypes["ConnectAPI"]["connectServiceClient"]["wakeSleepingClusterDevices"];
    };
  } & {
    createLoggingParams: (a: any) => any;
    pullToLocalDevice: (a: any) => any;
    transferPlayback: (a: any, b: any) => any;
    transferToRemote: (a: any, b: any) => any;
  };
  ContextualShuffleAPI: {
    _events: {
      _emitter: {
        _listeners: {
          update_complete: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
        };
        _metaListeners: {
          add: {};
          remove: {};
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
    } & {
      emitUpdateContextualShuffleModeCompleteSync: (a: any, b: any) => any;
      emitUpdateContextualShuffleModeErrorSync: (a: any, b: any) => any;
      emitUpdateContextualShuffleModeSync: (a: any, b: any) => any;
      emitUpdateSetting: () => any;
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    _indexedDbAPI: {
      _channel: {
        addEventListener: (a: any, b: any, c: any) => any;
        postMessage: (a: any) => any;
      } & {
        close: () => any;
        name: string;
        onmessage: null;
        onmessageerror: null;
        postMessage: PlatformTypes["ContextualShuffleAPI"]["_indexedDbAPI"]["_channel"]["postMessage"];
      } & {
        addEventListener: PlatformTypes["ContextualShuffleAPI"]["_indexedDbAPI"]["_channel"]["addEventListener"];
        dispatchEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["dispatchEvent"];
        removeEventListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"]["bluetooth"]["removeEventListener"];
      };
      _events: {
        _emitter: {
          _listeners: {
            delete: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
            update: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
          };
          _metaListeners: {
            add: {};
            remove: {};
          };
        } & {
          _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
          addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
          addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
          createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
          emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
          emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
          emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
          emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
          emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
          emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
          on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
          onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
          onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
          once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
          proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
          proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
          proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
          proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
          removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
          removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
          removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
        };
      } & {
        addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
        createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
        emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
        emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
        onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
        onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
        removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
      };
      name: string;
      version: number;
    } & {
      deleteItem: (a: any, b: any) => any;
      getEvents: () => any;
      getItem: (a: any, b: any) => any;
      openDb: () => Promise<any>;
      setItem: (a: any, b: any, c: any) => any;
    };
  } & {
    getContextualShuffleMode: (a: any) => any;
    getEvents: () => any;
    getIsSmartShuffleSettingEnabled: () => boolean;
    setContextualShuffleMode: (a: any, b: any) => any;
  };
  ControlMessageAPI: {
    _cosmos: PlatformTypes["AuthorizationAPI"]["_cosmos"];
    _partnerApiClient: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      enablePartnerApiEndpoint: (a: any, b: any) => any;
      setPartnerApiTcpPorts: (a: any, b: any) => any;
    };
    _updateUiClient: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      setButtonsVisibility: (a: any, b: any) => any;
      updateMenuState: (a: any, b: any) => any;
      updateTitlebarHeight: (a: any, b: any) => any;
    };
  } & {
    disableMenuItem: (a: any) => any;
    enableMenuItem: (a: any) => any;
    getEvents: () => any;
    notifyReadyStateReached: () => Promise<any>;
    notifyUsableStateReached: (a: any) => any;
    notifyViewLoaded: (a: any) => any;
    setPLEPorts: (a: any, b: any, c: any) => any;
    setTitlebarHeight: (a: any) => any;
  };
  CurationAPI: {
    _libraryAPI: {
      _builder: PlatformTypes["AdManagers"]["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
      _cache: Map<any, any>;
      _collection: {
        options: {};
        transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
      } & {
        add: (a: any, b: any) => any;
        addUnplayed: (a: any, b: any) => any;
        ban: (a: any, b: any) => any;
        banGlobal: (a: any, b: any) => any;
        banInPlayContext: (a: any, b: any) => any;
        contains: (a: any, b: any) => any;
        decorate: (a: any, b: any) => any;
        getAlbumTrackList: (a: any, b: any) => any;
        getAlbumView: (a: any, b: any) => any;
        getArtistTrackList: (a: any, b: any) => any;
        getArtistView: (a: any, b: any) => any;
        getBans: (a: any, b: any) => any;
        getBucketSyncStatus: (a: any, b: any) => any;
        getEpisodeList: (a: any, b: any) => any;
        getResumePoints: (a: any, b: any) => any;
        getTrackList: (a: any, b: any) => any;
        getTrackListMetadata: (a: any, b: any) => any;
        getUnplayedEpisodes: (a: any, b: any) => any;
        isSnoozed: (a: any, b: any) => any;
        offlineAlbum: (a: any, b: any) => any;
        offlineArtist: (a: any, b: any) => any;
        offlineTracks: (a: any, b: any) => any;
        playAlbum: (a: any, b: any) => any;
        playArtist: (a: any, b: any) => any;
        playTracks: (a: any, b: any) => any;
        remove: (a: any, b: any) => any;
        removeOfflineAlbum: (a: any, b: any) => any;
        removeOfflineArtist: (a: any, b: any) => any;
        removeOfflineTracks: (a: any, b: any) => any;
        removeUnplayed: (a: any, b: any) => any;
        snooze: (a: any, b: any) => any;
        streamAlbumTrackList: (a: any, b: any) => any;
        streamAlbumView: (a: any, b: any) => any;
        streamArtistTrackList: (a: any, b: any) => any;
        streamArtistView: (a: any, b: any) => any;
        streamBans: (a: any, b: any) => any;
        streamChanges: (a: any, b: any) => any;
        streamContains: (a: any, b: any) => any;
        streamDecorate: (a: any, b: any) => any;
        streamEpisodeList: (a: any, b: any) => any;
        streamTagsInfo: (a: any, b: any) => any;
        streamTrackList: (a: any, b: any) => any;
        streamTrackListMetadata: (a: any, b: any) => any;
        streamUnplayedEpisodes: (a: any, b: any) => any;
        tracksOfflineStatus: (a: any, b: any) => any;
        unban: (a: any, b: any) => any;
        unbanGlobal: (a: any, b: any) => any;
        unbanInPlayContext: (a: any, b: any) => any;
        unsnooze: (a: any, b: any) => any;
      };
      _currentUsername: string;
      _events: {
        _aggregator: {
          _additions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _batch: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _deletions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _onAdd: (a: any, b: any) => any;
          _onBatch: (a: any) => any;
          _onRemove: (a: any, b: any) => any;
          _onUpdate: (a: any, b: any, c: any) => any;
          _timeout: number;
          _timeoutId: null;
        } & {
          getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
          onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
          scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
          subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
          unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
        };
        _cache: Map<any, any>;
        _cancellables: {
          albums: {
            cancel: () => undefined;
          };
          artists: {
            cancel: () => undefined;
          };
          authors: {
            cancel: () => undefined;
          };
          books: {
            cancel: () => undefined;
          };
          episodes: {
            cancel: () => undefined;
          };
          events: {
            cancel: () => undefined;
          };
          shows: {
            cancel: () => undefined;
          };
          tracks: {
            cancel: () => undefined;
          };
        };
        _collection: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"];
        _containsCancellable: {
          cancel: () => undefined;
        };
        _emitter: {
          _listeners: {
            operation: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
            update: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
            update_item: Array<{
              listener: (a: any) => any;
              options: {
                uri: string;
              };
            }>;
            update_pin: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
            update_pin_error: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
          };
          _metaListeners: {
            add: {
              update: Array<{
                listener: () => undefined;
                options: {};
              }>;
              update_item: Array<{
                listener: (a: any) => any;
                options: {};
              }>;
            };
            remove: {
              update: Array<{
                listener: () => undefined;
                options: {};
              }>;
              update_item: Array<{
                listener: (a: any) => any;
                options: {};
              }>;
            };
          };
        } & {
          _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
          addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
          addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
          createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
          emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
          emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
          emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
          emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
          emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
          emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
          on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
          onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
          onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
          once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
          proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
          proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
          proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
          proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
          removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
          removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
          removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
        };
        _isAuthorsEnabled: boolean;
        _isEventsInYourLibraryEnabled: boolean;
        _numListeners: number;
        _playlist: {
          options: {};
          transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
        } & {
          find: (a: any, b: any) => any;
          get: (a: any, b: any) => any;
          multiGet: (a: any, b: any) => any;
          subscribe: (a: any, b: any) => any;
        };
        _your_library: {
          options: {};
          transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
        } & {
          all: (a: any, b: any) => any;
          contains: (a: any, b: any) => any;
          decorate: (a: any, b: any) => any;
          getKeys: (a: any, b: any) => any;
          isCurated: (a: any, b: any) => any;
          movePin: (a: any, b: any) => any;
          pin: (a: any, b: any) => any;
          streamAll: (a: any, b: any) => any;
          streamContains: (a: any, b: any) => any;
          streamDecorate: (a: any, b: any) => any;
          streamIsCurated: (a: any, b: any) => any;
          unPin: (a: any, b: any) => any;
        };
      } & {
        onBatchChanged: (a: any) => any;
        subscribeToUpdates: () => any;
        unsubscribeFromUpdates: () => any;
      } & {
        emitOperationComplete: (a: any, b: any) => any;
        emitOperationSync: (a: any, b: any, c: any) => any;
        emitUpdateItems: (a: any, b: any) => any;
        emitUpdatePin: (a: any, b: any) => any;
        emitUpdatePinErrorTooManyPins: (a: any, b: any) => any;
      } & {
        addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
        createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
        emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
        emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
        onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
        onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
        removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
      };
      _isAlbumSortByReleaseDateEnabled: boolean;
      _isAuthorsEnabled: boolean;
      _isCoursesEnabled: boolean;
      _isEventsInYourLibraryEnabled: boolean;
      _playlistDataClient: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_playlist"];
      _playlistServiceClient: {
        options: {};
        transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
      } & {
        clearToken: (a: any, b: any) => any;
        contains: (a: any, b: any) => any;
        emitItemSignals: (a: any, b: any) => any;
        emitSignals: (a: any, b: any) => any;
        getMembers: (a: any, b: any) => any;
        invalidateRevisions: (a: any, b: any) => any;
        modify: (a: any, b: any) => any;
        requestLenses: (a: any, b: any) => any;
        resync: (a: any, b: any) => any;
        setBasePermission: (a: any, b: any) => any;
        setMemberPermission: (a: any, b: any) => any;
        setOfflineState: (a: any, b: any) => any;
        setToken: (a: any, b: any) => any;
        signal: (a: any, b: any) => any;
        signalItem: (a: any, b: any) => any;
        subscribeToMembers: (a: any, b: any) => any;
      };
      _your_library: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"];
    } & {
      _isTagsInfoSynced: () => Promise<any>;
      add: (a: any) => any;
      contains: () => Promise<any>;
      containsSync: (a: any) => any;
      getCapabilities: () => {
        canFetchAllItems: boolean;
        canFilter: boolean;
        canFilterTracks: boolean;
        canGetTracksByArtistOrAlbum: boolean;
        canMarkEpisodesAsDone: boolean;
        canModifyOffline: boolean;
        canPin: boolean;
        canReverseSort: boolean;
        canSort: boolean;
        canSortTracks: boolean;
        canTextFilterContentsInRealtime: boolean;
      };
      getContents: (a: any) => any;
      getContentsPrimaryFilterId: (a: any) => any;
      getCustomSortOrderId: () => string;
      getEvents: () => any;
      getFilterLabel: (a: any) => any;
      getRecentsSortOrderId: () => string;
      getSortOrderLabel: (a: any) => any;
      getStaticallyKnownFilters: () => {
        playlist: {
          filterId: string;
          sortOrderIds: {
            customSort: string;
          };
        };
      };
      getTracks: () => Promise<any>;
      getTracksFilterTags: () => Promise<any>;
      markAsPlayed: (a: any) => any;
      markAsUnPlayed: (a: any) => any;
      pin: (a: any, b: any) => any;
      remove: (a: any) => any;
      unpin: (a: any) => any;
    };
    _playlistAPI: {
      _builder: PlatformTypes["AdManagers"]["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
      _events: {
        _aggregator: {
          _additions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _batch: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _deletions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _onAdd: (a: any, b: any) => any;
          _onBatch: (a: any) => any;
          _onRemove: (a: any, b: any) => any;
          _onUpdate: (a: any, b: any, c: any) => any;
          _timeout: number;
          _timeoutId: null;
        } & {
          getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
          onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
          scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
          subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
          unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
        };
        _dataClient: {
          options: {};
          transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
        } & {
          find: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_playlist"]["find"];
          get: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_playlist"]["get"];
          multiGet: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_playlist"]["multiGet"];
          subscribe: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_playlist"]["subscribe"];
        };
        _emitter: {
          _listeners: {};
          _metaListeners: {
            add: {
              update: Array<{
                listener: (a: any) => any;
                options: {};
              }>;
            };
            remove: {
              update: Array<{
                listener: (a: any) => any;
                options: {};
              }>;
            };
          };
        } & {
          _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
          addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
          addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
          createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
          emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
          emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
          emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
          emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
          emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
          emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
          on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
          onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
          onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
          once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
          proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
          proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
          proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
          proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
          removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
          removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
          removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
        };
        _subscriptions: Map<any, any>;
      } & {
        onBatchChanged: (a: any) => any;
      } & {
        emitAddComplete: (a: any) => any;
        emitAddSync: (a: any, b: any, c: any) => any;
        emitMoveComplete: (a: any) => any;
        emitMoveSync: (a: any, b: any) => any;
        emitRemoveComplete: (a: any) => any;
        emitRemoveSync: (a: any, b: any, c: any) => any;
        emitSendSignalComplete: (a: any, b: any, c: any) => any;
        emitSendSignalSync: (a: any, b: any, c: any) => any;
        emitUpdateComplete: (a: any) => any;
        emitUpdateSync: (a: any, b: any) => any;
      } & {
        addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
        createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
        emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
        emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
        onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
        onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
        removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
      };
      _isAuthorPageEnabled: boolean;
      _isTunaEnabled: boolean;
      _isWatchFeedEntityPagesEnabled: boolean;
      _playlistDataClient: PlatformTypes["CurationAPI"]["_playlistAPI"]["_events"]["_dataClient"];
      _playlistServiceClient: {
        options: {};
        transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
      } & {
        clearToken: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["clearToken"];
        contains: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["contains"];
        emitItemSignals: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["emitItemSignals"];
        emitSignals: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["emitSignals"];
        getMembers: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["getMembers"];
        invalidateRevisions: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["invalidateRevisions"];
        modify: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["modify"];
        requestLenses: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["requestLenses"];
        resync: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["resync"];
        setBasePermission: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setBasePermission"];
        setMemberPermission: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setMemberPermission"];
        setOfflineState: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setOfflineState"];
        setToken: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setToken"];
        signal: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["signal"];
        signalItem: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["signalItem"];
        subscribeToMembers: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["subscribeToMembers"];
      };
      _resyncAPI: {
        _playlistServiceClient: {
          options: {};
          transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
        } & {
          clearToken: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["clearToken"];
          contains: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["contains"];
          emitItemSignals: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["emitItemSignals"];
          emitSignals: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["emitSignals"];
          getMembers: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["getMembers"];
          invalidateRevisions: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["invalidateRevisions"];
          modify: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["modify"];
          requestLenses: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["requestLenses"];
          resync: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["resync"];
          setBasePermission: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setBasePermission"];
          setMemberPermission: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setMemberPermission"];
          setOfflineState: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setOfflineState"];
          setToken: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setToken"];
          signal: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["signal"];
          signalItem: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["signalItem"];
          subscribeToMembers: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["subscribeToMembers"];
        };
        lastSync: Map<any, any>;
      } & {
        maybeResync: (a: any) => any;
        resync: (a: any) => any;
      };
      _smartShuffleEligibilityAPI: {
        _metadataServiceClient: {
          options: {};
          transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
        } & {
          expire: (a: any, b: any) => any;
          fetch: (a: any, b: any) => any;
          observe: (a: any, b: any) => any;
          purge: (a: any, b: any) => any;
        };
      } & {
        getEligibility: (a: any) => any;
      };
    } & {
      _getLensedPlaylistUri: (a: any) => any;
      _getPlaylistDecorationPolicies: (a: any, b: any) => any;
      add: (a: any, b: any, c: any, d: any) => any;
      clearAttributes: (a: any, b: any) => any;
      getCapabilities: () => {
        canDecorateAddedBy: boolean;
        canFetchAllTracks: boolean;
        canFilter: boolean;
        canModifyOffline: boolean;
        canMoveMultipleItems: boolean;
        canSort: boolean;
        hasUidsGeneratedFromIndicies: boolean;
      };
      getContents: (a: any, b: any) => any;
      getEvents: () => any;
      getMetadata: (a: any, b: any) => any;
      getPlaylist: (a: any, b: any, c: any) => any;
      getRecommendedBookUris: (a: any, b: any, c: any) => any;
      getRecommendedTracks: (a: any, b: any, c: any) => any;
      move: (a: any, b: any, c: any) => any;
      remove: (a: any, b: any) => any;
      requestLenses: (a: any, b: any, c: any) => any;
      resolvePlaylistFormatURI: (a: any) => any;
      resync: (a: any, b: any) => any;
      sendSignal: (a: any, b: any, c: any, d: any) => any;
      setAttributes: (a: any, b: any) => any;
      updateDetails: (a: any, b: any) => any;
      uploadImage: (a: any) => any;
    };
    _your_library: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      all: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["all"];
      contains: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["contains"];
      decorate: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["decorate"];
      getKeys: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["getKeys"];
      isCurated: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["isCurated"];
      movePin: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["movePin"];
      pin: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["pin"];
      streamAll: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["streamAll"];
      streamContains: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["streamContains"];
      streamDecorate: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["streamDecorate"];
      streamIsCurated: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["streamIsCurated"];
      unPin: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["unPin"];
    };
    cache: {
      _cache: Map<any, any>;
      _ttl: number;
    } & {
      cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
      clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
      create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
      delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
      entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
      get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
      getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
      has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
      isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
      peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
      set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
    };
    events: {
      _emitter: {
        _listeners: {
          update_curated_item: Array<{
            listener: (a: any) => any;
            options: {
              uri: string;
            };
          }>;
        };
        _metaListeners: {
          add: {
            update_curated_item: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
          };
          remove: {
            update_curated_item: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
          };
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
      _your_library: PlatformTypes["CurationAPI"]["_your_library"];
      aggregator: {
        _additions: {
          clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
          delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
          entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
          forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
          get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
          has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
          keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
          set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
          size: number;
          values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
        };
        _batch: {
          clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
          delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
          entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
          forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
          get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
          has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
          keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
          set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
          size: number;
          values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
        };
        _deletions: {
          clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
          delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
          entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
          forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
          get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
          has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
          keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
          set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
          size: number;
          values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
        };
        _onAdd: (a: any, b: any) => any;
        _onBatch: (a: any) => any;
        _onRemove: (a: any, b: any) => any;
        _onUpdate: (a: any, b: any, c: any) => any;
        _timeout: number;
        _timeoutId: null;
      } & {
        getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
        onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
        scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
        subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
        unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
      };
      cache: PlatformTypes["CurationAPI"]["cache"];
      streamIsCuratedCancellable: {
        cancel: () => undefined;
      };
    } & {
      onCuratedBatchChanged: (a: any) => any;
    } & {
      emitOperationComplete: (a: any, b: any, c: any, d: any) => any;
      emitOperationSync: (a: any, b: any, c: any, d: any) => any;
      emitUpdateCuratedItems: (a: any, b: any) => any;
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    getDefaultCurationContextUri: (a: any) => any;
  } & {
    curateDefault: (a: any) => any;
    curateItems: (a: any, b: any, c: any) => any;
    getAvailableSortOrders: () => Array<{
      id: string;
      name: string;
    }>;
    getCapabilities: () => {
      canFilterOnCurationState: boolean;
      canSort: boolean;
    };
    getCurationContexts: (a: any) => any;
    getEvents: () => any;
    isCurated: () => Promise<any>;
    isCuratedSync: (a: any) => any;
  };
  DesktopLogsAPI: {
    _service: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      copyLogsToTempFolder: (a: any, b: any) => any;
      openFolder: (a: any, b: any) => any;
    };
  } & {
    getLogFolder: () => Promise<any>;
    openFolder: (a: any) => any;
  };
  EqualizerAPI: {
    filters: Array<{
      frequency: number;
      gain: number;
      key: string;
      type: string;
    }>;
    localStorageAPI: PlatformTypes["ConnectDevicesAPI"]["connectRestrictor"]["connectRestrictions"]["localStorageAPI"];
    prefs: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      create: (a: any, b: any) => any;
      get: (a: any, b: any) => any;
      getAll: (a: any, b: any) => any;
      set: (a: any, b: any) => any;
      sub: (a: any, b: any) => any;
      subAll: (a: any, b: any) => any;
    };
  } & {
    getFilters: () => Promise<any>;
    isSupported: () => boolean;
    setEnabledState: (a: any) => any;
    setFilterGain: (a: any, b: any) => any;
    subscribeToEnabledState: (a: any) => any;
  } & {
    getFilters: PlatformTypes["EqualizerAPI"]["getFilters"];
    getPreset: () => any;
    isSupported: PlatformTypes["EqualizerAPI"]["isSupported"];
    setEnabledState: PlatformTypes["EqualizerAPI"]["setEnabledState"];
    setFilterGain: PlatformTypes["EqualizerAPI"]["setFilterGain"];
    setPreset: (a: any) => any;
    subscribeToEnabledState: PlatformTypes["EqualizerAPI"]["subscribeToEnabledState"];
    subscribeToPresetChange: (a: any) => any;
  };
  EventSender: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"];
  ExternalAccessoryAPI: {
    _builder: PlatformTypes["AdManagers"]["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
    _cache: {
      _cache: Map<any, any>;
      _ttl: number;
    } & {
      cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
      clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
      create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
      delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
      entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
      get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
      getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
      has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
      isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
      peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
      set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
    };
  } & {
    lookup: (a: any) => any;
    sendLookupRequest: (a: any) => any;
  };
  FeatureFlags: {
    enableShows: boolean;
  };
  FeedbackAPI: {
    _client: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      add: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["add"];
      addUnplayed: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["addUnplayed"];
      ban: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["ban"];
      banGlobal: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["banGlobal"];
      banInPlayContext: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["banInPlayContext"];
      contains: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["contains"];
      decorate: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["decorate"];
      getAlbumTrackList: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getAlbumTrackList"];
      getAlbumView: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getAlbumView"];
      getArtistTrackList: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getArtistTrackList"];
      getArtistView: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getArtistView"];
      getBans: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getBans"];
      getBucketSyncStatus: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getBucketSyncStatus"];
      getEpisodeList: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getEpisodeList"];
      getResumePoints: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getResumePoints"];
      getTrackList: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getTrackList"];
      getTrackListMetadata: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getTrackListMetadata"];
      getUnplayedEpisodes: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getUnplayedEpisodes"];
      isSnoozed: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["isSnoozed"];
      offlineAlbum: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["offlineAlbum"];
      offlineArtist: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["offlineArtist"];
      offlineTracks: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["offlineTracks"];
      playAlbum: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["playAlbum"];
      playArtist: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["playArtist"];
      playTracks: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["playTracks"];
      remove: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["remove"];
      removeOfflineAlbum: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["removeOfflineAlbum"];
      removeOfflineArtist: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["removeOfflineArtist"];
      removeOfflineTracks: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["removeOfflineTracks"];
      removeUnplayed: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["removeUnplayed"];
      snooze: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["snooze"];
      streamAlbumTrackList: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamAlbumTrackList"];
      streamAlbumView: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamAlbumView"];
      streamArtistTrackList: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamArtistTrackList"];
      streamArtistView: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamArtistView"];
      streamBans: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamBans"];
      streamChanges: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamChanges"];
      streamContains: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamContains"];
      streamDecorate: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamDecorate"];
      streamEpisodeList: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamEpisodeList"];
      streamTagsInfo: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamTagsInfo"];
      streamTrackList: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamTrackList"];
      streamTrackListMetadata: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamTrackListMetadata"];
      streamUnplayedEpisodes: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamUnplayedEpisodes"];
      tracksOfflineStatus: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["tracksOfflineStatus"];
      unban: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["unban"];
      unbanGlobal: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["unbanGlobal"];
      unbanInPlayContext: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["unbanInPlayContext"];
      unsnooze: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["unsnooze"];
    };
    _events: {
      _contextualBanAggregatorByContextUri: {
        "spotify:playlist:5h8NEWcaATLrtKwCchpzwF": {
          _additions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _batch: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _deletions: {
            clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
            delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
            forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
            get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
            has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
            keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
            set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
            size: number;
            values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
          };
          _onAdd: (a: any, b: any) => any;
          _onBatch: (a: any) => any;
          _onRemove: (a: any, b: any) => any;
          _onUpdate: (a: any, b: any, c: any) => any;
          _timeout: number;
          _timeoutId: null;
        } & {
          getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
          onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
          scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
          subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
          unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
        };
      };
      _contextualBanCancelFunctionByContextUri: {
        "spotify:playlist:5h8NEWcaATLrtKwCchpzwF": () => undefined;
      };
      _emitter: {
        _listeners: {
          update_contextual_ban: Array<{
            listener: (a: any) => any;
            options: {
              contextUri: string;
              uri: string;
            };
          }>;
        };
        _metaListeners: {
          add: {
            update_contextual_ban: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
          };
          remove: {
            update_contextual_ban: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
          };
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
      _subscribeContextualBans: (a: any, b: any, c: any) => any;
    } & {
      emitUpdateContextualBan: (a: any, b: any, c: any) => any;
      onBatchChanged: (a: any, b: any) => any;
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
  } & {
    _subscribeContextualBans: (a: any, b: any, c: any) => any;
    addContextTrackBan: (a: any, b: any, c: any) => any;
    getCapabilities: () => {
      canBan: boolean;
    };
    getEvents: () => any;
    removeContextTrackBan: (a: any, b: any) => any;
  };
  FollowAPI: {
    _cache: {
      _cache: Map<any, any>;
      _ttl: null;
    } & {
      cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
      clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
      create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
      delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
      entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
      get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
      getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
      has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
      isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
      peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
      set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
    };
    _events: {
      _emitter: {
        _listeners: {
          operation: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
        };
        _metaListeners: {
          add: {};
          remove: {};
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
    } & {
      emitOperationComplete: (a: any, b: any) => any;
      emitOperationSync: (a: any, b: any) => any;
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    _loader: (a: any, b: any) => any;
  } & {
    _validateURIs: (a: any) => any;
    executeOperation: (a: any, b: any, c: any) => any;
    followUsers: (a: any) => any;
    getEvents: () => any;
    isFollowing: (a: any) => any;
    unfollowUsers: (a: any) => any;
  };
  GraphQLLoader: PlatformTypes["FollowAPI"]["_loader"];
  History: PlatformTypes["AdManagers"]["adStateReporter"]["history"];
  IndexedDbAPI: PlatformTypes["ContextualShuffleAPI"]["_indexedDbAPI"];
  JamDevicesAPI: {
    socialConnectAPI: {
      _fetchCurrentSessionInFlightCache: {
        _cache: Map<any, any>;
        _ttl: null;
      } & {
        create: (a: any, b: any) => any;
        deleteOnSettle: (a: any, b: any) => any;
        set: (a: any, b: any) => any;
      } & {
        cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
        clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
        create: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["_fetchCurrentSessionInFlightCache"]["create"];
        delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
        entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
        get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
        getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
        has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
        isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
        peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
        set: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["_fetchCurrentSessionInFlightCache"]["set"];
      };
      currentSession: null;
      events: {
        _emitter: {
          _listeners: {
            update: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
          };
          _metaListeners: {
            add: {};
            remove: {};
          };
        } & {
          _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
          addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
          addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
          createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
          emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
          emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
          emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
          emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
          emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
          emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
          on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
          onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
          onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
          once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
          proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
          proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
          proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
          proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
          removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
          removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
          removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
        };
      } & {
        addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
        createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
        emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
        emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
        onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
        onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
        removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
      };
      fetchShortLinkInFlightCache: {
        _cache: Map<any, any>;
        _ttl: null;
      } & {
        create: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["_fetchCurrentSessionInFlightCache"]["create"];
        deleteOnSettle: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["_fetchCurrentSessionInFlightCache"]["deleteOnSettle"];
        set: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["_fetchCurrentSessionInFlightCache"]["set"];
      } & {
        cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
        clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
        create: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["_fetchCurrentSessionInFlightCache"]["create"];
        delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
        entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
        get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
        getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
        has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
        isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
        peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
        set: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["_fetchCurrentSessionInFlightCache"]["set"];
      };
      serviceEvents: {
        _emitter: {
          _listeners: {
            SESSION_MESSAGE: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
            SESSION_UPDATE: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
          };
          _metaListeners: {
            add: {
              SESSION_MESSAGE: Array<{
                listener: () => undefined;
                options: {};
              }>;
              SESSION_UPDATE: Array<{
                listener: () => undefined;
                options: {};
              }>;
            };
            remove: {
              SESSION_MESSAGE: Array<{
                listener: () => undefined;
                options: {};
              }>;
              SESSION_UPDATE: Array<{
                listener: () => undefined;
                options: {};
              }>;
            };
          };
        } & {
          _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
          addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
          addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
          createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
          emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
          emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
          emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
          emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
          emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
          emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
          on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
          onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
          onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
          once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
          proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
          proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
          proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
          proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
          removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
          removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
          removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
        };
        _message_subscription: {
          cancel: () => undefined;
        };
        _pubSubAPI: PlatformTypes["BuddyFeedAPI"]["batchAPI"]["presence2"]["pubsub"];
        _update_subscription: {
          cancel: () => undefined;
        };
        numMessageListeners: number;
        numUpdateListeners: number;
      } & {
        onSessionMessage: (a: any) => any;
        onSessionUpdate: (a: any) => any;
        subscribeToMessages: () => any;
        subscribeToUpdates: () => any;
        unsubscribeToMessages: () => any;
        unsubscribeToUpdates: () => any;
      } & {
        addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
        createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
        emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
        emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
        onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
        onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
        removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
      };
      shortLinkCaches: {
        shortLinkCache: {
          _cache: Map<any, any>;
          _ttl: null;
        } & {
          cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
          clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
          create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
          delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
          entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
          get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
          getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
          has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
          isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
          peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
          set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
        };
        shortLinkQRCache: {
          _cache: Map<any, any>;
          _ttl: null;
        } & {
          cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
          clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
          create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
          delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
          entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
          get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
          getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
          has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
          isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
          peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
          set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
        };
      };
      socialConnectBroadcastingAPI: {
        _desktop_local_net_session_client: {
          options: {};
          transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
        } & {
          startBroadcasting: (a: any, b: any) => any;
          startScanning: (a: any, b: any) => any;
          stopBroadcasting: (a: any, b: any) => any;
          stopScanning: (a: any, b: any) => any;
          subNetworkInterfaces: (a: any, b: any) => any;
        };
        _pubSubAPI: PlatformTypes["BuddyFeedAPI"]["batchAPI"]["presence2"]["pubsub"];
        _socialConnectServiceClient: {
          _requestBuilder: PlatformTypes["AdManagers"]["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
          _transport: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"];
        } & {
          createSession: () => Promise<any>;
          deleteSession: (a: any) => any;
          fetchCurrentSession: (a: any) => any;
          getSessionInfo: (a: any) => any;
          joinSession: (a: any, b: any, c: any, d: any) => any;
          kickAllParticipants: (a: any) => any;
          leaveSession: (a: any) => any;
          onConnected: (a: any) => any;
          removeSessionMember: (a: any, b: any) => any;
          setBroadcastStatus: (a: any, b: any) => any;
          setParticipantVolumeControl: (a: any) => any;
          setQueueOnlyMode: (a: any) => any;
        };
        activeDeviceId: null;
        broadcastStatus: {
          current: null;
        };
        broadcastStatusUpdatesSubscription: {
          cancel: () => undefined;
        };
        events: {
          _emitter: {
            _listeners: {};
            _metaListeners: {
              add: {
                broadcast_status_update: Array<{
                  listener: (a: any) => any;
                  options: {};
                }>;
              };
              remove: {};
            };
          } & {
            _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
            addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
            addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
            createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
            emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
            emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
            emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
            emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
            emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
            emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
            on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
            onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
            onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
            once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
            proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
            proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
            proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
            proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
            removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
            removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
            removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
          };
          broadcastStatus: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectBroadcastingAPI"]["broadcastStatus"];
        } & {
          addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
          createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
          emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
          emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
          onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
          onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
          removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
        };
        latestScanningResponse: {
          devices: Array<any>;
        };
      } & {
        getEvents: () => any;
        getLocalNetSessionDevices: () => any;
        handleBroadcastStatusUpdate: (a: any, b: any) => any;
        setBroadcastStatus: (a: any) => any;
        startScanningForLocalNetSessionDevices: () => any;
        subscribeToBroadcastStatusUpdates: () => any;
      };
      socialConnectConfig: string;
      socialConnectProductState: {
        isJamFreeEnabled: boolean;
        isJamPremiumEnabled: boolean;
        listeners: Set<any>;
        productStateApi: {
          _inFlightCache: {
            _cache: Map<any, any>;
            _ttl: null;
          } & {
            create: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["_fetchCurrentSessionInFlightCache"]["create"];
            deleteOnSettle: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["_fetchCurrentSessionInFlightCache"]["deleteOnSettle"];
            set: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["_fetchCurrentSessionInFlightCache"]["set"];
          } & {
            cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
            clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
            create: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["_fetchCurrentSessionInFlightCache"]["create"];
            delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
            get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
            getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
            has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
            isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
            peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
            set: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["_fetchCurrentSessionInFlightCache"]["set"];
          };
          _subs: Set<any>;
          cache: {
            _cache: Map<any, any>;
            _ttl: number;
          } & {
            cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
            clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
            create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
            delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
            entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
            get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
            getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
            has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
            isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
            peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
            set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
          };
          productStateApi: {
            options: {};
            transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
          } & {
            delOverridesValues: (a: any, b: any) => any;
            getValues: (a: any, b: any) => any;
            putOverridesValues: (a: any, b: any) => any;
            putValues: (a: any, b: any) => any;
            putValuesSync: (a: any, b: any) => any;
            subValues: (a: any, b: any) => any;
          };
        } & {
          getCachedValues: () => any;
          getValues: () => Promise<any>;
          mapKeys: (a: any) => any;
          setValues: (a: any) => any;
          subValues: (a: any) => any;
        };
      } & {
        addListener: (a: any) => any;
        getJamExperience: () => any;
      };
      socialConnectServiceClient: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectBroadcastingAPI"]["_socialConnectServiceClient"];
      urlDispenserServiceClient: {
        _builder: PlatformTypes["AdManagers"]["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
      } & {
        getShortUrl: (a: any, b: any) => any;
      };
      waitForActiveOrLocalDeviceId: () => Promise<any>;
    } & {
      addJamExperienceListener: (a: any) => any;
      cleanupSession: () => any;
      createSession: () => Promise<any>;
      deleteSession: () => Promise<any>;
      emitSessionEnded: (a: any) => any;
      fetchBroadcastStatus: () => Promise<any>;
      fetchCurrentSession: () => Promise<any>;
      fetchCurrentSessionWithCache: () => Promise<any>;
      getBroadcastingEvents: () => any;
      getCachedShortInviteLink: (a: any, b: any) => any;
      getCurrentSession: () => any;
      getEnabled: () => any;
      getEvents: () => any;
      getJamExperience: () => any;
      getJamJoinInfo: () => any;
      getJoinTokenFromConnectDeviceId: (a: any) => any;
      getLocalNetSessionDevices: () => any;
      getSessionInfo: (a: any) => any;
      getShortInviteLink: (a: any, b: any, c: any) => any;
      getShortInviteLinks: (a: any, b: any) => any;
      handleJamSessionResponse: (a: any) => any;
      handleSessionMessage: (a: any) => any;
      handleSessionUpdate: (a: any) => any;
      isSessionNewer: (a: any) => any;
      joinSession: (a: any, b: any, c: any, d: any) => any;
      kickAllParticipants: (a: any) => any;
      leaveSession: () => Promise<any>;
      maybeEmitLeaveOrJoin: (a: any, b: any) => any;
      removeSessionMember: (a: any) => any;
      setBroadcastStatus: (a: any) => any;
      setCurrentSession: (a: any) => any;
      setParticipantVolumeControl: (a: any) => any;
      setQueueOnlyMode: (a: any) => any;
    };
  } & {
    areTheSame: (a: any, b: any) => any;
    cleanupJams: (a: any, b: any, c: any) => any;
    combineJamsWithEntities: (a: any, b: any, c: any) => any;
    createNearbyJamRowEntities: (a: any) => any;
    getJamDevices: () => Promise<any>;
    mergeJamsWithEntities: (a: any, b: any) => any;
    removeJamIfWeAreOnItAlready: (a: any, b: any) => any;
    removeMatchedJams: (a: any, b: any) => any;
  };
  LibraryAPI: PlatformTypes["CurationAPI"]["_libraryAPI"];
  LifecycleAPI: {
    _client: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      restart: (a: any, b: any) => any;
      shutdown: (a: any, b: any) => any;
    };
  } & {
    restart: () => Promise<any>;
    shutdown: () => Promise<any>;
  };
  LocalFilesAPI: {
    _client: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      addFolder: (a: any, b: any) => any;
      getScannerStatus: (a: any, b: any) => any;
      getSources: (a: any, b: any) => any;
      getTracks: (a: any, b: any) => any;
      mutateDefaultSource: (a: any, b: any) => any;
      mutateDefaultSources: (a: any, b: any) => any;
      notifyDefaultSources: (a: any, b: any) => any;
      removeFolder: (a: any, b: any) => any;
      subscribeScannerStatus: (a: any, b: any) => any;
      subscribeSources: (a: any, b: any) => any;
      subscribeTracks: (a: any, b: any) => any;
    };
    _cosmos: PlatformTypes["AuthorizationAPI"]["_cosmos"];
    _events: {
      _emitter: {
        _listeners: {
          update: Array<{
            listener: () => undefined;
            options: {};
          }>;
        };
        _metaListeners: {
          add: {};
          remove: {};
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    _localStorageAPI: PlatformTypes["ConnectDevicesAPI"]["connectRestrictor"]["connectRestrictions"]["localStorageAPI"];
    _totalLength: number;
  } & {
    _emitUpdate: () => any;
    _subscribeToTracksUpdates: () => any;
    addFolder: (a: any) => any;
    browseForFolder: () => Promise<any>;
    getCapabilities: () => {
      canFetchAllTracks: boolean;
      canFilter: boolean;
      canSort: boolean;
    };
    getEvents: () => any;
    getIsEnabled: () => any;
    getSources: () => Promise<any>;
    getTracks: (a: any, b: any) => any;
    mutateDefaultSource: (a: any) => any;
    removeFolder: (a: any) => any;
    setIsEnabled: (a: any) => any;
    subscribeIsEnabled: (a: any) => any;
  };
  LocalStorageAPI: PlatformTypes["ConnectDevicesAPI"]["connectRestrictor"]["connectRestrictions"]["localStorageAPI"];
  NativeAPI: {
    _updateUiClient: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      setButtonsVisibility: PlatformTypes["ControlMessageAPI"]["_updateUiClient"]["setButtonsVisibility"];
      updateMenuState: PlatformTypes["ControlMessageAPI"]["_updateUiClient"]["updateMenuState"];
      updateTitlebarHeight: PlatformTypes["ControlMessageAPI"]["_updateUiClient"]["updateTitlebarHeight"];
    };
  } & {
    setWindowButtonsVisibility: (a: any) => any;
  };
  OfflineAPI: {
    _cache: Map<any, any>;
    _canDownload: (a: any) => any;
    _events: {
      _cache: Map<any, any>;
      _cosmos: PlatformTypes["AuthorizationAPI"]["_cosmos"];
      _emitter: {
        _listeners: {
          error: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
          update_availability: Array<{
            listener: (a: any) => any;
            options: {
              uri: string;
            };
          }>;
          update_capabilities: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
        };
        _metaListeners: {
          add: {
            error: Array<{
              listener: () => undefined;
              options: {};
            }>;
            update_availability: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
            update_capabilities: Array<{
              listener: () => undefined;
              options: {};
            }>;
            update_connectivity: Array<{
              listener: () => undefined;
              options: {};
            }>;
            update_context_progress: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
            update_total_progress: Array<{
              listener: () => undefined;
              options: {};
            }>;
          };
          remove: {
            error: Array<{
              listener: () => undefined;
              options: {};
            }>;
            update_availability: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
            update_capabilities: Array<{
              listener: () => undefined;
              options: {};
            }>;
            update_connectivity: Array<{
              listener: () => undefined;
              options: {};
            }>;
            update_context_progress: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
            update_total_progress: Array<{
              listener: () => undefined;
              options: {};
            }>;
          };
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
      _offline: {
        options: {};
        transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
      } & {
        addDownload: (a: any, b: any) => any;
        getContextForDevices: (a: any, b: any) => any;
        getContexts: (a: any, b: any) => any;
        getContextsProgress: (a: any, b: any) => any;
        getDevices: (a: any, b: any) => any;
        getItems: (a: any, b: any) => any;
        getLocalDevice: (a: any, b: any) => any;
        getOfflineLicenseInfo: (a: any, b: any) => any;
        getOfflinePlaybackStatus: (a: any, b: any) => any;
        getTotalProgress: (a: any, b: any) => any;
        removeAllDownloads: (a: any, b: any) => any;
        removeDownload: (a: any, b: any) => any;
        setOfflinePlaybackAllowed: (a: any, b: any) => any;
        subscribeContextForDevices: (a: any, b: any) => any;
        subscribeContexts: (a: any, b: any) => any;
        subscribeContextsProgress: (a: any, b: any) => any;
        subscribeDevicesWithContext: (a: any, b: any) => any;
        subscribeError: (a: any, b: any) => any;
        subscribeItems: (a: any, b: any) => any;
        subscribeOfflinePlaybackStatus: (a: any, b: any) => any;
        subscribeTotalProgress: (a: any, b: any) => any;
      };
      _productState: {
        options: {};
        transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
      } & {
        delOverridesValues: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"]["delOverridesValues"];
        getValues: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"]["getValues"];
        putOverridesValues: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"]["putOverridesValues"];
        putValues: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"]["putValues"];
        putValuesSync: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"]["putValuesSync"];
        subValues: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"]["subValues"];
      };
      _username: string;
    } & {
      setupCapabilitiesEvents: () => any;
      setupConnectivityEvents: () => any;
      setupContextAndItemAvailabilityEvents: () => any;
      setupContextProgressEvents: () => any;
      setupErrorEvents: () => any;
      setupTotalProgressEvents: () => any;
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    _offline: PlatformTypes["OfflineAPI"]["_events"]["_offline"];
    _productState: PlatformTypes["OfflineAPI"]["_events"]["_productState"];
    _storage: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      deleteExpiredItems: (a: any, b: any) => any;
      deleteUnlockedItems: (a: any, b: any) => any;
      getCacheSizeLimit: (a: any, b: any) => any;
      getFileRanges: (a: any, b: any) => any;
      getStats: (a: any, b: any) => any;
      setCacheSizeLimit: (a: any, b: any) => any;
    };
    _username: string;
    _yourLibrary: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      all: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["all"];
      contains: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["contains"];
      decorate: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["decorate"];
      getKeys: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["getKeys"];
      isCurated: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["isCurated"];
      movePin: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["movePin"];
      pin: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["pin"];
      streamAll: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["streamAll"];
      streamContains: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["streamContains"];
      streamDecorate: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["streamDecorate"];
      streamIsCurated: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["streamIsCurated"];
      unPin: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_your_library"]["unPin"];
    };
  } & {
    addDownload: (a: any, b: any) => any;
    getAvailabilitySync: (a: any) => any;
    getCapabilities: () => {
      canDownload: (a: any, b: any) => any;
      canRemoteDownload: boolean;
    };
    getContextForDevices: (a: any) => any;
    getDownloads: () => Promise<any>;
    getEvents: () => any;
    getStatistics: () => Promise<any>;
    removeAllDownloads: () => Promise<any>;
    removeCache: () => Promise<any>;
    removeDownload: (a: any, b: any) => any;
  };
  PlatformData: {
    app_platform: string;
    client_capabilities: {
      can_autostart: boolean;
      can_minimize_or_exit_on_close: boolean;
      can_restart: boolean;
      can_show_system_media_controls: boolean;
      can_show_track_notifications: boolean;
    };
    client_name: string;
    client_variant: string;
    client_version_quadruple: string;
    client_version_quintuple: string;
    client_version_triple: string;
    event_sender_context_information: {
      client_id: string;
      client_version_int: number;
      client_version_string: string;
      device_id: string;
      device_manufacturer: string;
      device_model: string;
      installation_id: string;
      os_version: string;
      platform_type: string;
    };
    is_developer_mode: boolean;
    os_name: string;
    os_settings: {
      double_click_interval_ms: number;
      scroller_style: string;
    };
    os_version: string;
    remote_config_client_id: string;
  };
  PlayHistoryAPI: {
    _cache: {
      _cache: Map<any, any>;
      _ttl: number;
    } & {
      cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
      clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
      create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
      delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
      entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
      get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
      getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
      has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
      isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
      peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
      set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
    };
    _events: {
      _cache: PlatformTypes["PlayHistoryAPI"]["_cache"];
      _emitter: {
        _listeners: {};
        _metaListeners: {
          add: {
            update: Array<{
              listener: () => undefined;
              options: {};
            }>;
          };
          remove: {
            update: Array<{
              listener: () => undefined;
              options: {};
            }>;
          };
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
      _loader: (a: any, b: any, c: any, d: any) => any;
      _numListeners: number;
      _player: {
        options: {};
        transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
      } & {
        addToQueue: (a: any, b: any) => any;
        deleteSession: (a: any, b: any) => any;
        getError: (a: any, b: any) => any;
        getPlayHistory: (a: any, b: any) => any;
        getPositionState: (a: any, b: any) => any;
        getQueue: (a: any, b: any) => any;
        getState: (a: any, b: any) => any;
        pause: (a: any, b: any) => any;
        play: (a: any, b: any) => any;
        playAsNextInQueue: (a: any, b: any) => any;
        playPrepared: (a: any, b: any) => any;
        preparePlay: (a: any, b: any) => any;
        resume: (a: any, b: any) => any;
        seekTo: (a: any, b: any) => any;
        setOptions: (a: any, b: any) => any;
        setQueue: (a: any, b: any) => any;
        setRepeatingContext: (a: any, b: any) => any;
        setRepeatingTrack: (a: any, b: any) => any;
        setShufflingContext: (a: any, b: any) => any;
        setSleepTimer: (a: any, b: any) => any;
        signal: (a: any, b: any) => any;
        skipNext: (a: any, b: any) => any;
        skipPrev: (a: any, b: any) => any;
        stop: (a: any, b: any) => any;
        updateContext: (a: any, b: any) => any;
        updateContextPage: (a: any, b: any) => any;
        updateContextTrack: (a: any, b: any) => any;
        updateViewUri: (a: any, b: any) => any;
      };
      _subscriptions: {
        update: null;
      };
    } & {
      startListening: () => any;
      stopListening: () => any;
    } & {
      onListenerAdded: () => any;
      onListenerRemoved: () => any;
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    _loader: PlatformTypes["PlayHistoryAPI"]["_events"]["_loader"];
    _player: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      addToQueue: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["addToQueue"];
      deleteSession: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["deleteSession"];
      getError: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["getError"];
      getPlayHistory: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["getPlayHistory"];
      getPositionState: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["getPositionState"];
      getQueue: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["getQueue"];
      getState: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["getState"];
      pause: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["pause"];
      play: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["play"];
      playAsNextInQueue: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["playAsNextInQueue"];
      playPrepared: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["playPrepared"];
      preparePlay: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["preparePlay"];
      resume: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["resume"];
      seekTo: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["seekTo"];
      setOptions: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["setOptions"];
      setQueue: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["setQueue"];
      setRepeatingContext: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["setRepeatingContext"];
      setRepeatingTrack: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["setRepeatingTrack"];
      setShufflingContext: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["setShufflingContext"];
      setSleepTimer: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["setSleepTimer"];
      signal: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["signal"];
      skipNext: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["skipNext"];
      skipPrev: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["skipPrev"];
      stop: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["stop"];
      updateContext: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["updateContext"];
      updateContextPage: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["updateContextPage"];
      updateContextTrack: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["updateContextTrack"];
      updateViewUri: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["updateViewUri"];
    };
  } & {
    getCapabilities: () => {
      isSupported: boolean;
    };
    getContents: () => Promise<any>;
    getEvents: () => any;
  };
  PlaybackAPI: {
    __volume: number;
    _connectServiceClient: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      becomeInactive: PlatformTypes["ConnectAPI"]["connectServiceClient"]["becomeInactive"];
      cancelTransfer: PlatformTypes["ConnectAPI"]["connectServiceClient"]["cancelTransfer"];
      forceDiscover: PlatformTypes["ConnectAPI"]["connectServiceClient"]["forceDiscover"];
      getDebugLevel: PlatformTypes["ConnectAPI"]["connectServiceClient"]["getDebugLevel"];
      getDeviceSettings: PlatformTypes["ConnectAPI"]["connectServiceClient"]["getDeviceSettings"];
      installSpotify: PlatformTypes["ConnectAPI"]["connectServiceClient"]["installSpotify"];
      logout: PlatformTypes["ConnectAPI"]["connectServiceClient"]["logout"];
      notifyAudioRouteChanged: PlatformTypes["ConnectAPI"]["connectServiceClient"]["notifyAudioRouteChanged"];
      performDiscovery: PlatformTypes["ConnectAPI"]["connectServiceClient"]["performDiscovery"];
      pickerOpened: PlatformTypes["ConnectAPI"]["connectServiceClient"]["pickerOpened"];
      pull: PlatformTypes["ConnectAPI"]["connectServiceClient"]["pull"];
      refreshCluster: PlatformTypes["ConnectAPI"]["connectServiceClient"]["refreshCluster"];
      rename: PlatformTypes["ConnectAPI"]["connectServiceClient"]["rename"];
      sendCommand: PlatformTypes["ConnectAPI"]["connectServiceClient"]["sendCommand"];
      setDebugLevel: PlatformTypes["ConnectAPI"]["connectServiceClient"]["setDebugLevel"];
      setDeviceStreamQuality: PlatformTypes["ConnectAPI"]["connectServiceClient"]["setDeviceStreamQuality"];
      setPreferredZeroconf: PlatformTypes["ConnectAPI"]["connectServiceClient"]["setPreferredZeroconf"];
      startDiscovery: PlatformTypes["ConnectAPI"]["connectServiceClient"]["startDiscovery"];
      state: PlatformTypes["ConnectAPI"]["connectServiceClient"]["state"];
      transfer: PlatformTypes["ConnectAPI"]["connectServiceClient"]["transfer"];
      wakeSleepingClusterDevices: PlatformTypes["ConnectAPI"]["connectServiceClient"]["wakeSleepingClusterDevices"];
    };
    _events: {
      _emitter: {
        _listeners: {
          muted_changed: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
          volume: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
        };
        _metaListeners: {
          add: {};
          remove: {};
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    _info: {
      advisedBitrate: number;
      audioId: string;
      buffering: boolean;
      codecName: string;
      error: number;
      fileBitrate: number;
      fileId: string;
      fileType: string;
      gainAdjustment: number;
      hasLoudness: boolean;
      lengthMs: bigint;
      loudness: number;
      playbackSpeed: number;
      playing: boolean;
      resolvedContentUrl: string;
      status: number;
      strategy: string;
      targetBitrate: number;
      targetFileAvailable: boolean;
    };
    _isAvailable: boolean;
    _isLocal: boolean;
    _muteHelper: {
      _isMuted: boolean;
      _playbackAPI: PlatformTypes["PlaybackAPI"];
      _volumeBehindMute: number;
    } & {
      emitMuted: () => any;
      isMuted: () => any;
      mute: () => Promise<any>;
      onVolumeChange: (a: any) => any;
      setMuted: (a: any) => any;
      toggleMute: () => Promise<any>;
      unmute: () => Promise<any>;
    };
    _playbackService: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      duck: (a: any, b: any) => any;
      getFiles: (a: any, b: any) => any;
      getFormats: (a: any, b: any) => any;
      getPlaybackInfo: (a: any, b: any) => any;
      getRawVolume: (a: any, b: any) => any;
      getVolume: (a: any, b: any) => any;
      lowerVolume: (a: any, b: any) => any;
      raiseVolume: (a: any, b: any) => any;
      setRawVolume: (a: any, b: any) => any;
      setVolume: (a: any, b: any) => any;
      subBufferUnderrun: (a: any, b: any) => any;
      subPlaybackInfo: (a: any, b: any) => any;
      subPosition: (a: any, b: any) => any;
      subRawVolume: (a: any, b: any) => any;
      subVolume: (a: any, b: any) => any;
    };
    _storageService: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      deleteExpiredItems: PlatformTypes["OfflineAPI"]["_storage"]["deleteExpiredItems"];
      deleteUnlockedItems: PlatformTypes["OfflineAPI"]["_storage"]["deleteUnlockedItems"];
      getCacheSizeLimit: PlatformTypes["OfflineAPI"]["_storage"]["getCacheSizeLimit"];
      getFileRanges: PlatformTypes["OfflineAPI"]["_storage"]["getFileRanges"];
      getStats: PlatformTypes["OfflineAPI"]["_storage"]["getStats"];
      setCacheSizeLimit: PlatformTypes["OfflineAPI"]["_storage"]["setCacheSizeLimit"];
    };
  } & {
    _volume: number;
    emitVolume: () => any;
    getCapabilities: () => {
      canChangeVolume: boolean;
      canGetFiles: boolean;
      canGetPlaybackInfo: boolean;
      puffinEnabled: boolean;
    };
    getEvents: () => any;
    getFiles: (a: any) => any;
    getMuteHelper: () => any;
    getPlaybackInfo: () => Promise<any>;
    getVolume: () => Promise<any>;
    getVolumeInternal: () => any;
    lowerVolume: () => Promise<any>;
    raiseVolume: () => Promise<any>;
    setVolume: (a: any) => any;
  };
  PlaybackFiltersAPI: {
    disableNormalizationOverride: () => undefined;
    getDevices: () => Promise<any>;
    getFilterState: () => Promise<any>;
    getFiltersEvents: () => null;
    getSavedDevices: () => Array<any>;
    isAvailable: () => boolean;
    isNormalizationOverriden: () => boolean;
    removeCurrentDevice: () => undefined;
    setCurrentDevice: () => Promise<any>;
  };
  PlayerAPI: {
    _collection: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      add: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["add"];
      addUnplayed: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["addUnplayed"];
      ban: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["ban"];
      banGlobal: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["banGlobal"];
      banInPlayContext: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["banInPlayContext"];
      contains: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["contains"];
      decorate: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["decorate"];
      getAlbumTrackList: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getAlbumTrackList"];
      getAlbumView: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getAlbumView"];
      getArtistTrackList: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getArtistTrackList"];
      getArtistView: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getArtistView"];
      getBans: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getBans"];
      getBucketSyncStatus: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getBucketSyncStatus"];
      getEpisodeList: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getEpisodeList"];
      getResumePoints: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getResumePoints"];
      getTrackList: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getTrackList"];
      getTrackListMetadata: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getTrackListMetadata"];
      getUnplayedEpisodes: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["getUnplayedEpisodes"];
      isSnoozed: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["isSnoozed"];
      offlineAlbum: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["offlineAlbum"];
      offlineArtist: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["offlineArtist"];
      offlineTracks: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["offlineTracks"];
      playAlbum: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["playAlbum"];
      playArtist: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["playArtist"];
      playTracks: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["playTracks"];
      remove: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["remove"];
      removeOfflineAlbum: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["removeOfflineAlbum"];
      removeOfflineArtist: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["removeOfflineArtist"];
      removeOfflineTracks: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["removeOfflineTracks"];
      removeUnplayed: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["removeUnplayed"];
      snooze: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["snooze"];
      streamAlbumTrackList: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamAlbumTrackList"];
      streamAlbumView: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamAlbumView"];
      streamArtistTrackList: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamArtistTrackList"];
      streamArtistView: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamArtistView"];
      streamBans: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamBans"];
      streamChanges: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamChanges"];
      streamContains: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamContains"];
      streamDecorate: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamDecorate"];
      streamEpisodeList: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamEpisodeList"];
      streamTagsInfo: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamTagsInfo"];
      streamTrackList: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamTrackList"];
      streamTrackListMetadata: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamTrackListMetadata"];
      streamUnplayedEpisodes: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["streamUnplayedEpisodes"];
      tracksOfflineStatus: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["tracksOfflineStatus"];
      unban: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["unban"];
      unbanGlobal: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["unbanGlobal"];
      unbanInPlayContext: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["unbanInPlayContext"];
      unsnooze: PlatformTypes["CurationAPI"]["_libraryAPI"]["_collection"]["unsnooze"];
    };
    _contextPlayer: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      addToQueue: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["addToQueue"];
      deleteSession: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["deleteSession"];
      getError: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["getError"];
      getPlayHistory: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["getPlayHistory"];
      getPositionState: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["getPositionState"];
      getQueue: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["getQueue"];
      getState: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["getState"];
      pause: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["pause"];
      play: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["play"];
      playAsNextInQueue: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["playAsNextInQueue"];
      playPrepared: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["playPrepared"];
      preparePlay: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["preparePlay"];
      resume: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["resume"];
      seekTo: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["seekTo"];
      setOptions: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["setOptions"];
      setQueue: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["setQueue"];
      setRepeatingContext: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["setRepeatingContext"];
      setRepeatingTrack: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["setRepeatingTrack"];
      setShufflingContext: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["setShufflingContext"];
      setSleepTimer: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["setSleepTimer"];
      signal: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["signal"];
      skipNext: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["skipNext"];
      skipPrev: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["skipPrev"];
      stop: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["stop"];
      updateContext: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["updateContext"];
      updateContextPage: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["updateContextPage"];
      updateContextTrack: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["updateContextTrack"];
      updateViewUri: PlatformTypes["PlayHistoryAPI"]["_events"]["_player"]["updateViewUri"];
    };
    _contextualShuffle: PlatformTypes["ContextualShuffleAPI"];
    _cosmos: {
      requestFactory: PlatformTypes["AuthorizationAPI"]["_cosmos"]["requestFactory"];
      resolver: PlatformTypes["AuthorizationAPI"]["_cosmos"]["resolver"];
    } & {
      del: (a: any, b: any) => any;
      get: (a: any, b: any) => any;
      head: PlatformTypes["AuthorizationAPI"]["_cosmos"]["head"];
      patch: (a: any, b: any) => any;
      post: (a: any, b: any) => any;
      postSub: PlatformTypes["AuthorizationAPI"]["_cosmos"]["postSub"];
      put: (a: any, b: any) => any;
      request: PlatformTypes["AuthorizationAPI"]["_cosmos"]["request"];
      resolve: PlatformTypes["AuthorizationAPI"]["_cosmos"]["resolve"];
      sub: PlatformTypes["AuthorizationAPI"]["_cosmos"]["sub"];
    };
    _defaultFeatureVersion: string;
    _events: {
      _client: PlatformTypes["PlayerAPI"]["_contextPlayer"];
      _emitter: {
        _listeners: {
          action: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
          error: Array<{
            listener: () => Promise<any>;
            options: {};
          }>;
          queue_update: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
          ready: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
          update: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
        };
        _metaListeners: {
          add: {};
          remove: {};
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
    } & {
      emitPauseSync: () => any;
      emitPlaySync: (a: any, b: any, c: any) => any;
      emitQueueActionComplete: (a: any) => any;
      emitQueueActionSync: (a: any) => any;
      emitQueueUpdate: (a: any) => any;
      emitResumeSync: () => any;
      emitSkipToNextSync: () => any;
      emitSkipToPreviousSync: () => any;
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    _isCentralizedSmartShuffleEnabled: boolean;
    _isLegacySmartShuffleEnabled: boolean;
    _isSleepTimerEnabled: boolean;
    _playlistPlayServiceClient: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      getPlayContext: (a: any, b: any) => any;
      play: (a: any, b: any) => any;
    };
    _playlistResyncerAPI: PlatformTypes["CurationAPI"]["_playlistAPI"]["_resyncAPI"];
    _playlistServiceClient: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      clearToken: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["clearToken"];
      contains: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["contains"];
      emitItemSignals: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["emitItemSignals"];
      emitSignals: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["emitSignals"];
      getMembers: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["getMembers"];
      invalidateRevisions: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["invalidateRevisions"];
      modify: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["modify"];
      requestLenses: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["requestLenses"];
      resync: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["resync"];
      setBasePermission: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setBasePermission"];
      setMemberPermission: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setMemberPermission"];
      setOfflineState: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setOfflineState"];
      setToken: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setToken"];
      signal: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["signal"];
      signalItem: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["signalItem"];
      subscribeToMembers: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["subscribeToMembers"];
    };
    _queue: {
      _client: PlatformTypes["PlayerAPI"]["_contextPlayer"];
      _events: PlatformTypes["PlayerAPI"]["_events"];
      _queue: {
        nextTracks: Array<
          | {
              blocked: Array<any>;
              contextTrack: {
                metadata: {
                  "actions.skipping_next_past_track": string;
                  "actions.skipping_prev_past_track": string;
                  album_artist_name: string;
                  album_title: string;
                  album_uri: string;
                  artist_name: string;
                  artist_uri: string;
                  "canvas.artist.avatar": string;
                  "canvas.artist.name": string;
                  "canvas.artist.uri": string;
                  "canvas.canvasUri": string;
                  "canvas.entityUri": string;
                  "canvas.explicit": string;
                  "canvas.fileId": string;
                  "canvas.id": string;
                  "canvas.type": string;
                  "canvas.uploadedBy": string;
                  "canvas.url": string;
                  "collection.can_add": string;
                  "collection.can_ban": string;
                  "collection.in_collection": string;
                  "collection.is_banned": string;
                  context_uri: string;
                  duration: string;
                  entity_uri: string;
                  has_lyrics: string;
                  image_large_url: string;
                  image_small_url: string;
                  image_url: string;
                  image_xlarge_url: string;
                  iteration: string;
                  marked_for_download: string;
                  title: string;
                  track_player: string;
                };
                uid: string;
                uri: string;
              };
              provider: string;
              removed: Array<any>;
            }
          | {
              blocked: Array<any>;
              contextTrack: {
                metadata: {
                  album_artist_name: string;
                  album_title: string;
                  album_uri: string;
                  artist_name: string;
                  artist_uri: string;
                  "canvas.artist.avatar": string;
                  "canvas.artist.name": string;
                  "canvas.artist.uri": string;
                  "canvas.canvasUri": string;
                  "canvas.entityUri": string;
                  "canvas.explicit": string;
                  "canvas.fileId": string;
                  "canvas.id": string;
                  "canvas.type": string;
                  "canvas.uploadedBy": string;
                  "canvas.url": string;
                  "collection.can_add": string;
                  "collection.can_ban": string;
                  "collection.in_collection": string;
                  "collection.is_banned": string;
                  context_uri: string;
                  duration: string;
                  entity_uri: string;
                  has_lyrics: string;
                  image_small_url: string;
                  image_url: string;
                  iteration: string;
                  marked_for_download: string;
                  title: string;
                  track_player: string;
                };
                uid: string;
                uri: string;
              };
              provider: string;
              removed: Array<any>;
            }
          | {
              blocked: Array<any>;
              contextTrack: {
                metadata: {
                  album_artist_name: string;
                  album_title: string;
                  album_uri: string;
                  artist_name: string;
                  "artist_name:1": string;
                  artist_uri: string;
                  "artist_uri:1": string;
                  "collection.can_add": string;
                  "collection.can_ban": string;
                  "collection.in_collection": string;
                  "collection.is_banned": string;
                  context_uri: string;
                  duration: string;
                  entity_uri: string;
                  has_lyrics: string;
                  image_small_url: string;
                  image_url: string;
                  iteration: string;
                  marked_for_download: string;
                  title: string;
                  track_player: string;
                };
                uid: string;
                uri: string;
              };
              provider: string;
              removed: Array<any>;
            }
          | {
              blocked: Array<any>;
              contextTrack: {
                metadata: {
                  album_artist_name: string;
                  album_title: string;
                  album_uri: string;
                  artist_name: string;
                  "artist_name:1": string;
                  artist_uri: string;
                  "artist_uri:1": string;
                  "collection.can_add": string;
                  "collection.can_ban": string;
                  "collection.in_collection": string;
                  "collection.is_banned": string;
                  context_uri: string;
                  duration: string;
                  entity_uri: string;
                  has_lyrics: string;
                  image_small_url: string;
                  image_url: string;
                  is_explicit: string;
                  iteration: string;
                  marked_for_download: string;
                  title: string;
                  track_player: string;
                };
                uid: string;
                uri: string;
              };
              provider: string;
              removed: Array<any>;
            }
          | {
              blocked: Array<any>;
              contextTrack: {
                metadata: {
                  album_artist_name: string;
                  album_title: string;
                  album_uri: string;
                  artist_name: string;
                  artist_uri: string;
                  "collection.can_add": string;
                  "collection.can_ban": string;
                  "collection.in_collection": string;
                  "collection.is_banned": string;
                  context_uri: string;
                  duration: string;
                  entity_uri: string;
                  has_lyrics: string;
                  image_small_url: string;
                  image_url: string;
                  iteration: string;
                  marked_for_download: string;
                  title: string;
                  track_player: string;
                };
                uid: string;
                uri: string;
              };
              provider: string;
              removed: Array<any>;
            }
          | {
              blocked: Array<any>;
              contextTrack: {
                metadata: {
                  album_artist_name: string;
                  album_title: string;
                  album_uri: string;
                  artist_name: string;
                  artist_uri: string;
                  "canvas.artist.avatar": string;
                  "canvas.artist.name": string;
                  "canvas.artist.uri": string;
                  "canvas.canvasUri": string;
                  "canvas.entityUri": string;
                  "canvas.explicit": string;
                  "canvas.fileId": string;
                  "canvas.id": string;
                  "canvas.type": string;
                  "canvas.uploadedBy": string;
                  "canvas.url": string;
                  "collection.can_add": string;
                  "collection.can_ban": string;
                  "collection.in_collection": string;
                  "collection.is_banned": string;
                  context_uri: string;
                  duration: string;
                  entity_uri: string;
                  has_lyrics: string;
                  image_small_url: string;
                  image_url: string;
                  is_explicit: string;
                  iteration: string;
                  marked_for_download: string;
                  title: string;
                  track_player: string;
                };
                uid: string;
                uri: string;
              };
              provider: string;
              removed: Array<any>;
            }
          | {
              blocked: Array<any>;
              contextTrack: {
                metadata: {
                  album_artist_name: string;
                  album_title: string;
                  album_uri: string;
                  artist_name: string;
                  "artist_name:1": string;
                  artist_uri: string;
                  "artist_uri:1": string;
                  "canvas.artist.avatar": string;
                  "canvas.artist.name": string;
                  "canvas.artist.uri": string;
                  "canvas.canvasUri": string;
                  "canvas.entityUri": string;
                  "canvas.explicit": string;
                  "canvas.fileId": string;
                  "canvas.id": string;
                  "canvas.type": string;
                  "canvas.uploadedBy": string;
                  "canvas.url": string;
                  "collection.can_add": string;
                  "collection.can_ban": string;
                  "collection.in_collection": string;
                  "collection.is_banned": string;
                  context_uri: string;
                  duration: string;
                  entity_uri: string;
                  has_lyrics: string;
                  image_small_url: string;
                  image_url: string;
                  iteration: string;
                  marked_for_download: string;
                  title: string;
                  track_player: string;
                };
                uid: string;
                uri: string;
              };
              provider: string;
              removed: Array<any>;
            }
          | {
              blocked: Array<any>;
              contextTrack: {
                metadata: {
                  album_artist_name: string;
                  album_title: string;
                  album_uri: string;
                  artist_name: string;
                  "artist_name:1": string;
                  "artist_name:2": string;
                  artist_uri: string;
                  "artist_uri:1": string;
                  "artist_uri:2": string;
                  "canvas.artist.avatar": string;
                  "canvas.artist.name": string;
                  "canvas.artist.uri": string;
                  "canvas.canvasUri": string;
                  "canvas.entityUri": string;
                  "canvas.explicit": string;
                  "canvas.fileId": string;
                  "canvas.id": string;
                  "canvas.type": string;
                  "canvas.uploadedBy": string;
                  "canvas.url": string;
                  "collection.can_add": string;
                  "collection.can_ban": string;
                  "collection.in_collection": string;
                  "collection.is_banned": string;
                  context_uri: string;
                  duration: string;
                  entity_uri: string;
                  has_lyrics: string;
                  image_small_url: string;
                  image_url: string;
                  is_explicit: string;
                  iteration: string;
                  marked_for_download: string;
                  title: string;
                  track_player: string;
                };
                uid: string;
                uri: string;
              };
              provider: string;
              removed: Array<any>;
            }
          | {
              blocked: Array<any>;
              contextTrack: {
                metadata: {
                  album_artist_name: string;
                  album_title: string;
                  album_uri: string;
                  artist_name: string;
                  artist_uri: string;
                  "collection.can_add": string;
                  "collection.can_ban": string;
                  "collection.in_collection": string;
                  "collection.is_banned": string;
                  context_uri: string;
                  duration: string;
                  entity_uri: string;
                  has_lyrics: string;
                  image_small_url: string;
                  image_url: string;
                  is_explicit: string;
                  iteration: string;
                  marked_for_download: string;
                  title: string;
                  track_player: string;
                };
                uid: string;
                uri: string;
              };
              provider: string;
              removed: Array<any>;
            }
          | {
              blocked: Array<any>;
              contextTrack: {
                metadata: {
                  album_artist_name: string;
                  album_title: string;
                  album_uri: string;
                  artist_name: string;
                  "artist_name:1": string;
                  "artist_name:2": string;
                  artist_uri: string;
                  "artist_uri:1": string;
                  "artist_uri:2": string;
                  "collection.can_add": string;
                  "collection.can_ban": string;
                  "collection.in_collection": string;
                  "collection.is_banned": string;
                  context_uri: string;
                  duration: string;
                  entity_uri: string;
                  has_lyrics: string;
                  image_small_url: string;
                  image_url: string;
                  iteration: string;
                  marked_for_download: string;
                  title: string;
                  track_player: string;
                };
                uid: string;
                uri: string;
              };
              provider: string;
              removed: Array<any>;
            }
        >;
        prevTracks: Array<
          | {
              blocked: Array<any>;
              contextTrack: {
                metadata: {
                  album_artist_name: string;
                  album_title: string;
                  album_uri: string;
                  artist_name: string;
                  artist_uri: string;
                  "collection.can_add": string;
                  "collection.can_ban": string;
                  "collection.in_collection": string;
                  "collection.is_banned": string;
                  context_uri: string;
                  duration: string;
                  entity_uri: string;
                  has_lyrics: string;
                  image_small_url: string;
                  image_url: string;
                  iteration: string;
                  marked_for_download: string;
                  title: string;
                  track_player: string;
                };
                uid: string;
                uri: string;
              };
              provider: string;
              removed: Array<any>;
            }
          | {
              blocked: Array<any>;
              contextTrack: {
                metadata: {
                  album_artist_name: string;
                  album_title: string;
                  album_uri: string;
                  artist_name: string;
                  artist_uri: string;
                  "collection.can_add": string;
                  "collection.can_ban": string;
                  "collection.in_collection": string;
                  "collection.is_banned": string;
                  context_uri: string;
                  duration: string;
                  entity_uri: string;
                  has_lyrics: string;
                  image_small_url: string;
                  image_url: string;
                  is_explicit: string;
                  iteration: string;
                  marked_for_download: string;
                  title: string;
                  track_player: string;
                };
                uid: string;
                uri: string;
              };
              provider: string;
              removed: Array<any>;
            }
          | {
              blocked: Array<any>;
              contextTrack: {
                metadata: {
                  album_artist_name: string;
                  album_title: string;
                  album_uri: string;
                  artist_name: string;
                  artist_uri: string;
                  "canvas.artist.avatar": string;
                  "canvas.artist.name": string;
                  "canvas.artist.uri": string;
                  "canvas.canvasUri": string;
                  "canvas.entityUri": string;
                  "canvas.explicit": string;
                  "canvas.fileId": string;
                  "canvas.id": string;
                  "canvas.type": string;
                  "canvas.uploadedBy": string;
                  "canvas.url": string;
                  "collection.can_add": string;
                  "collection.can_ban": string;
                  "collection.in_collection": string;
                  "collection.is_banned": string;
                  context_uri: string;
                  duration: string;
                  entity_uri: string;
                  has_lyrics: string;
                  image_small_url: string;
                  image_url: string;
                  iteration: string;
                  marked_for_download: string;
                  title: string;
                  track_player: string;
                };
                uid: string;
                uri: string;
              };
              provider: string;
              removed: Array<any>;
            }
          | {
              blocked: Array<any>;
              contextTrack: {
                metadata: {
                  hidden: string;
                  iteration: string;
                };
                uid: string;
                uri: string;
              };
              provider: string;
              removed: Array<string>;
            }
          | {
              blocked: Array<any>;
              contextTrack: {
                metadata: {
                  "actions.skipping_next_past_track": string;
                  "actions.skipping_prev_past_track": string;
                  album_artist_name: string;
                  album_title: string;
                  album_uri: string;
                  artist_name: string;
                  artist_uri: string;
                  "collection.can_add": string;
                  "collection.can_ban": string;
                  "collection.in_collection": string;
                  "collection.is_banned": string;
                  context_uri: string;
                  duration: string;
                  entity_uri: string;
                  has_lyrics: string;
                  image_large_url: string;
                  image_small_url: string;
                  image_url: string;
                  image_xlarge_url: string;
                  iteration: string;
                  marked_for_download: string;
                  title: string;
                  track_player: string;
                };
                uid: string;
                uri: string;
              };
              provider: string;
              removed: Array<any>;
            }
        >;
        queueRevision: bigint;
        track: {
          blocked: Array<any>;
          contextTrack: {
            metadata: {
              "actions.skipping_next_past_track": string;
              "actions.skipping_prev_past_track": string;
              album_artist_name: string;
              album_title: string;
              album_uri: string;
              artist_name: string;
              "artist_name:1": string;
              artist_uri: string;
              "artist_uri:1": string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              title: string;
              track_player: string;
            };
            uid: string;
            uri: string;
          };
          provider: string;
          removed: Array<any>;
        };
      };
      _queueState: {
        current: {
          album: {
            images: Array<{
              label: string;
              url: string;
            }>;
            name: string;
            type: string;
            uri: string;
          };
          artists: Array<{
            name: string;
            type: string;
            uri: string;
          }>;
          duration: {
            milliseconds: number;
          };
          hasAssociatedVideo: boolean;
          images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["current"]["album"]["images"];
          is19PlusOnly: boolean;
          isExplicit: boolean;
          isLocal: boolean;
          mediaType: string;
          metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["track"]["contextTrack"]["metadata"];
          name: string;
          provider: string;
          type: string;
          uid: string;
          uri: string;
        };
        nextUp: Array<
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][0]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][0]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][1]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][1]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][2]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][2]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][3]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][3]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][4]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][4]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][5]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][5]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][6]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][6]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][7]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][7]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][8]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][8]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][9]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][9]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][10]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][10]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][11]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][11]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][12]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][12]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][13]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][13]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][14]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][14]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][15]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][15]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][16]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][16]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][17]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][17]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][18]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][18]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][19]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][19]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][20]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][20]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][21]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][21]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][22]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][22]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][23]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][23]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][24]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][24]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][25]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][25]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][26]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][26]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][27]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][27]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][28]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][28]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][29]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][29]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][30]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][30]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][31]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][31]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][32]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][32]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][33]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][33]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][34]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][34]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][35]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][35]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][36]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][36]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][37]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][37]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][38]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][38]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][39]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][39]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][40]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][40]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][41]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][41]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][42]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][42]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][43]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][43]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][44]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][44]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][45]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][45]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][46]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][46]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][47]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][47]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][48]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][48]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][49]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][49]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][50]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][50]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][51]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][51]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][52]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][52]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][53]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][53]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][54]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][54]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][55]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][55]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][56]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][56]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][57]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][57]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][58]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][58]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][59]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][59]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][60]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][60]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][61]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][61]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][62]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][62]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][63]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][63]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][64]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][64]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][65]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][65]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][66]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][66]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][67]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][67]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][68]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][68]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][69]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][69]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][70]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][70]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][71]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][71]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][72]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][72]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][73]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][73]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][74]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][74]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][75]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][75]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][76]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][76]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][77]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][77]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][78]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][78]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
          | {
              album: {
                images: Array<{
                  label: string;
                  url: string;
                }>;
                name: string;
                type: string;
                uri: string;
              };
              artists: Array<{
                name: string;
                type: string;
                uri: string;
              }>;
              duration: {
                milliseconds: number;
              };
              hasAssociatedVideo: boolean;
              images: PlatformTypes["PlayerAPI"]["_queue"]["_queueState"]["nextUp"][79]["album"]["images"];
              is19PlusOnly: boolean;
              isExplicit: boolean;
              isLocal: boolean;
              mediaType: string;
              metadata: PlatformTypes["PlayerAPI"]["_queue"]["_queue"]["nextTracks"][79]["contextTrack"]["metadata"];
              name: string;
              provider: string;
              type: string;
              uid: string;
              uri: string;
            }
        >;
        queued: Array<any>;
      };
      timeoutId: null;
    } & {
      addToQueue: (a: any, b: any) => any;
      clearQueue: () => Promise<any>;
      convertQueueState: (a: any) => any;
      createQueueItem: (a: any, b: any) => any;
      getInternalQueue: () => any;
      getQueue: () => any;
      insertIntoQueue: (a: any, b: any, c: any) => any;
      isQueued: (a: any) => any;
      isSameItem: (a: any, b: any) => any;
      markAsQueued: (a: any) => any;
      removeFromQueue: (a: any) => any;
      reorderQueue: (a: any, b: any) => any;
    };
    _sleepTimerCore: null;
    _smartShuffleEligibility: PlatformTypes["CurationAPI"]["_playlistAPI"]["_smartShuffleEligibilityAPI"];
    _state: {
      context: {
        metadata: {
          context_description: string;
          context_owner: string;
          enhanced_context: string;
          image_url: string;
          initiated_from_list_play_esperanto: string;
          "player.arch": string;
          playlist_number_of_episodes: string;
          playlist_number_of_tracks: string;
          playlist_volatile_context_id: string;
        };
        uri: string;
        url: string;
      };
      duration: number;
      format: number;
      hasContext: boolean;
      index: {
        itemIndex: number;
        pageIndex: number;
        pageURI: null;
      };
      isBuffering: boolean;
      isPaused: boolean;
      item: {
        album: {
          images: Array<{
            label: string;
            url: string;
          }>;
          name: string;
          type: string;
          uri: string;
        };
        artists: Array<{
          name: string;
          type: string;
          uri: string;
        }>;
        duration: {
          milliseconds: number;
        };
        hasAssociatedVideo: boolean;
        images: PlatformTypes["PlayerAPI"]["_state"]["item"]["album"]["images"];
        is19PlusOnly: boolean;
        isExplicit: boolean;
        isLocal: boolean;
        mediaType: string;
        metadata: {
          "actions.skipping_next_past_track": string;
          "actions.skipping_prev_past_track": string;
          album_artist_name: string;
          album_disc_count: string;
          album_disc_number: string;
          album_title: string;
          album_track_count: string;
          album_track_number: string;
          album_uri: string;
          artist_name: string;
          "artist_name:1": string;
          artist_uri: string;
          "artist_uri:1": string;
          "canvas.artist.avatar": string;
          "canvas.artist.name": string;
          "canvas.artist.uri": string;
          "canvas.canvasUri": string;
          "canvas.entityUri": string;
          "canvas.explicit": string;
          "canvas.fileId": string;
          "canvas.id": string;
          "canvas.type": string;
          "canvas.uploadedBy": string;
          "canvas.url": string;
          "collection.can_add": string;
          "collection.can_ban": string;
          "collection.in_collection": string;
          "collection.is_banned": string;
          context_uri: string;
          duration: string;
          entity_uri: string;
          has_lyrics: string;
          image_large_url: string;
          image_small_url: string;
          image_url: string;
          image_xlarge_url: string;
          iteration: string;
          marked_for_download: string;
          popularity: string;
          title: string;
          track_player: string;
        };
        name: string;
        provider: string;
        type: string;
        uid: string;
        uri: string;
      };
      nextItems: Array<
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][0]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              "actions.skipping_next_past_track": string;
              "actions.skipping_prev_past_track": string;
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][1]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][2]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][3]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              "artist_name:1": string;
              artist_uri: string;
              "artist_uri:1": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][4]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][5]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              "artist_name:1": string;
              artist_uri: string;
              "artist_uri:1": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              is_explicit: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][6]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][7]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][8]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][9]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              is_explicit: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][10]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              "artist_name:1": string;
              artist_uri: string;
              "artist_uri:1": string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][11]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][12]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][13]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][14]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][15]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][16]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              "artist_name:1": string;
              "artist_name:2": string;
              artist_uri: string;
              "artist_uri:1": string;
              "artist_uri:2": string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              is_explicit: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][17]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              "artist_name:1": string;
              artist_uri: string;
              "artist_uri:1": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][18]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              "artist_name:1": string;
              artist_uri: string;
              "artist_uri:1": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              is_explicit: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][19]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][20]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][21]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][22]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][23]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][24]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][25]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][26]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][27]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][28]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][29]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              "artist_name:1": string;
              artist_uri: string;
              "artist_uri:1": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][30]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][31]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][32]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              "artist_name:1": string;
              artist_uri: string;
              "artist_uri:1": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              is_explicit: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][33]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][34]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][35]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              is_explicit: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][36]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              "artist_name:1": string;
              artist_uri: string;
              "artist_uri:1": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              is_explicit: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][37]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][38]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "canvas.artist.avatar": string;
              "canvas.artist.name": string;
              "canvas.artist.uri": string;
              "canvas.canvasUri": string;
              "canvas.entityUri": string;
              "canvas.explicit": string;
              "canvas.fileId": string;
              "canvas.id": string;
              "canvas.type": string;
              "canvas.uploadedBy": string;
              "canvas.url": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][39]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][40]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              "artist_name:1": string;
              artist_uri: string;
              "artist_uri:1": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              is_explicit: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][41]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              is_explicit: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][42]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][43]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][44]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][45]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][46]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][47]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              "artist_name:1": string;
              artist_uri: string;
              "artist_uri:1": string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][48]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
        | {
            album: {
              images: Array<{
                label: string;
                url: string;
              }>;
              name: string;
              type: string;
              uri: string;
            };
            artists: Array<{
              name: string;
              type: string;
              uri: string;
            }>;
            duration: {
              milliseconds: number;
            };
            hasAssociatedVideo: boolean;
            images: PlatformTypes["PlayerAPI"]["_state"]["nextItems"][49]["album"]["images"];
            is19PlusOnly: boolean;
            isExplicit: boolean;
            isLocal: boolean;
            mediaType: string;
            metadata: {
              album_artist_name: string;
              album_disc_count: string;
              album_disc_number: string;
              album_title: string;
              album_track_count: string;
              album_track_number: string;
              album_uri: string;
              artist_name: string;
              artist_uri: string;
              "collection.can_add": string;
              "collection.can_ban": string;
              "collection.in_collection": string;
              "collection.is_banned": string;
              context_uri: string;
              duration: string;
              entity_uri: string;
              has_lyrics: string;
              image_large_url: string;
              image_small_url: string;
              image_url: string;
              image_xlarge_url: string;
              iteration: string;
              marked_for_download: string;
              popularity: string;
              title: string;
              track_player: string;
            };
            name: string;
            provider: string;
            type: string;
            uid: string;
            uri: string;
          }
      >;
      playbackId: string;
      playbackQuality: {
        bitrateLevel: number;
        losslessStatus: number;
        strategy: number;
        targetBitrateAvailable: boolean;
        targetBitrateLevel: number;
      };
      positionAsOfTimestamp: number;
      previousItems: Array<{
        album: {
          images: Array<{
            label: string;
            url: string;
          }>;
          name: string;
          type: string;
          uri: string;
        };
        artists: Array<{
          name: string;
          type: string;
          uri: string;
        }>;
        duration: {
          milliseconds: number;
        };
        hasAssociatedVideo: boolean;
        images: PlatformTypes["PlayerAPI"]["_state"]["previousItems"][0]["album"]["images"];
        is19PlusOnly: boolean;
        isExplicit: boolean;
        isLocal: boolean;
        mediaType: string;
        metadata: {
          "actions.skipping_next_past_track": string;
          "actions.skipping_prev_past_track": string;
          album_artist_name: string;
          album_disc_count: string;
          album_disc_number: string;
          album_title: string;
          album_track_count: string;
          album_track_number: string;
          album_uri: string;
          artist_name: string;
          artist_uri: string;
          "collection.can_add": string;
          "collection.can_ban": string;
          "collection.in_collection": string;
          "collection.is_banned": string;
          context_uri: string;
          duration: string;
          entity_uri: string;
          has_lyrics: string;
          image_large_url: string;
          image_small_url: string;
          image_url: string;
          image_xlarge_url: string;
          iteration: string;
          marked_for_download: string;
          popularity: string;
          title: string;
          track_player: string;
        };
        name: string;
        provider: string;
        type: string;
        uid: string;
        uri: string;
      }>;
      repeat: number;
      restrictions: {
        canPause: boolean;
        canResume: boolean;
        canSeek: boolean;
        canSkipNext: boolean;
        canSkipPrevious: boolean;
        canToggleRepeatContext: boolean;
        canToggleRepeatTrack: boolean;
        canToggleShuffle: boolean;
        canToggleSmartShuffle: boolean;
        disallowAddToQueueReasons: Array<any>;
        disallowPausingReasons: Array<string>;
        disallowResumingReasons: Array<any>;
        disallowSeekingReasons: Array<any>;
        disallowSetQueueReasons: Array<any>;
        disallowSettingPlaybackSpeedReasons: Array<string>;
        disallowSignals: {};
        disallowSkippingNextReasons: Array<any>;
        disallowSkippingPreviousReasons: Array<any>;
        disallowTogglingRepeatContextReasons: Array<any>;
        disallowTogglingRepeatTrackReasons: Array<any>;
        disallowTogglingShuffleReasons: Array<any>;
        disallowTransferringPlaybackReasons: Array<any>;
      };
      sessionId: string;
      shuffle: boolean;
      signals: Array<string>;
      sleepTimer: {
        timestamp: null;
        type: number;
      };
      smartShuffle: boolean;
      speed: number;
      speedEsperanto: number;
      timestamp: number;
    };
    referrer: string;
  } & {
    addToQueue: (a: any, b: any) => any;
    canPlayEncryptedContent: () => Promise<any>;
    canSendSignal: (a: any) => any;
    clearQueue: () => Promise<any>;
    getCapabilities: () => {
      canChangeSpeed: boolean;
      canChangeVolume: boolean;
      canPlayMultipleContextPages: boolean;
      hasDecoratedQueue: boolean;
      maxNextTracks: number;
    };
    getEvents: () => any;
    getQueue: () => any;
    getReferrer: () => any;
    getSleepTimerCore: () => any;
    getState: () => any;
    insertIntoQueue: (a: any, b: any, c: any) => any;
    pause: (a: any) => any;
    play: (a: any, b: any) => any;
    playAsNextInQueue: (a: any) => any;
    refreshCurrentContext: () => Promise<any>;
    removeFromQueue: (a: any) => any;
    reorderQueue: (a: any, b: any) => any;
    resume: (a: any) => any;
    seekBackward: (a: any) => any;
    seekBy: (a: any) => any;
    seekForward: (a: any) => any;
    seekTo: (a: any) => any;
    sendSignal: (a: any, b: any) => any;
    setDefaultFeatureVersion: (a: any) => any;
    setReferrer: (a: any) => any;
    setRepeat: (a: any) => any;
    setShuffle: (a: any) => any;
    setSleepTimer: (a: any) => any;
    setSpeed: (a: any) => any;
    skipTo: (a: any) => any;
    skipToNext: (a: any) => any;
    skipToPrevious: () => Promise<any>;
    updateContext: (a: any, b: any, c: any) => any;
  };
  PlaylistAPI: PlatformTypes["CurationAPI"]["_playlistAPI"];
  PlaylistPermissionsAPI: {
    _builder: PlatformTypes["AdManagers"]["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
    _client: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      clearToken: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["clearToken"];
      contains: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["contains"];
      emitItemSignals: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["emitItemSignals"];
      emitSignals: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["emitSignals"];
      getMembers: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["getMembers"];
      invalidateRevisions: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["invalidateRevisions"];
      modify: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["modify"];
      requestLenses: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["requestLenses"];
      resync: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["resync"];
      setBasePermission: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setBasePermission"];
      setMemberPermission: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setMemberPermission"];
      setOfflineState: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setOfflineState"];
      setToken: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setToken"];
      signal: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["signal"];
      signalItem: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["signalItem"];
      subscribeToMembers: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["subscribeToMembers"];
    };
    _events: {
      _emitter: {
        _listeners: {};
        _metaListeners: {
          add: {};
          remove: {};
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
    } & {
      emitOperationComplete: (a: any) => any;
      emitOperationSync: (a: any) => any;
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
  } & {
    claimPermissions: (a: any, b: any) => any;
    getCapabilities: () => {};
    getEvents: () => any;
    getMembers: (a: any) => any;
    getPermissionGrant: (a: any, b: any) => any;
    removeMember: (a: any, b: any) => any;
    setBasePermission: (a: any, b: any) => any;
    setMemberPermission: (a: any, b: any, c: any) => any;
    subscribeToMembers: (a: any, b: any) => any;
  };
  PlaylistResyncAPI: PlatformTypes["CurationAPI"]["_playlistAPI"]["_resyncAPI"];
  PrivateSessionAPI: {
    _scrobble: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      getIncognitoMode: (a: any, b: any) => any;
      putIncognitoMode: (a: any, b: any) => any;
      subIncognitoMode: (a: any, b: any) => any;
    };
  } & {
    getCapabilities: () => {
      isSupported: boolean;
    };
    setPrivateSession: (a: any) => any;
    subscribeToPrivateSession: (a: any) => any;
  };
  ProductStateAPI: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"];
  PubSubAPI: PlatformTypes["BuddyFeedAPI"]["batchAPI"]["presence2"]["pubsub"];
  RecentlyPlayedAPI: {
    _cancellable: {
      cancel: () => undefined;
    };
    _client: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      stream: (a: any, b: any) => any;
      tracks: (a: any, b: any) => any;
    };
    _contexts: null;
    _events: {
      _emitter: {
        _listeners: {
          update: Array<{
            listener: () => undefined;
            options: {};
          }>;
        };
        _metaListeners: {
          add: {
            update: Array<{
              listener: () => undefined;
              options: {};
            }>;
          };
          remove: {};
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    _isAuthorPageEnabled: boolean;
  } & {
    getContexts: () => any;
    getEvents: () => any;
    startListening: () => any;
  };
  ReduxStore: PlatformTypes["ActionStoreAPI"];
  Registry: {
    _map: Map<any, any>;
    _parents: Array<any>;
    _tree: {
      addChild: () => undefined;
      getChildren: () => Array<any>;
      getKey: () => any;
      getNodes: () => Array<any>;
      getParents: () => Array<any>;
      getValue: () => any;
      isRoot: () => boolean;
      removeChild: () => undefined;
    };
  } & {
    getDependencyTree: () => any;
    registerFactory: (a: any, b: any) => any;
    registerImpl: (a: any, b: any) => any;
    registerValue: (a: any, b: any) => any;
    resolve: (a: any) => any;
    resolveImpl: (a: any, b: any) => any;
    resolveNoThrow: (a: any) => any;
    wrap: (a: any, b: any) => any;
    wrapImpl: (a: any, b: any, c: any) => any;
  };
  RemoteConfigDebugAPI: {
    _client: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      clearOverrides: (a: any, b: any) => any;
      getConfiguration: (a: any, b: any) => any;
      getOverrides: (a: any, b: any) => any;
      getProperties: (a: any, b: any) => any;
      setOverride: (a: any, b: any) => any;
    };
    _configuration: {
      accessListeners: Set<any>;
      values: Map<any, any>;
    } & {
      getValue: (a: any) => any;
      toBuilder: () => any;
      toJSON: () => any;
    };
    _definitions: Array<
      | {
          default: boolean;
          description: string;
          name: string;
          type: string;
        }
      | {
          default: number;
          description: string;
          lower: number;
          name: string;
          type: string;
          upper: number;
        }
      | {
          default: string;
          description: string;
          name: string;
          type: string;
          values: Array<string>;
        }
    >;
    _events: {
      _emitter: {
        _listeners: {
          update: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
        };
        _metaListeners: {
          add: {};
          remove: {};
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    _localConfiguration: {
      accessListeners: Set<any>;
      values: Map<any, any>;
    } & {
      getValue: PlatformTypes["RemoteConfigDebugAPI"]["_configuration"]["getValue"];
      toBuilder: PlatformTypes["RemoteConfigDebugAPI"]["_configuration"]["toBuilder"];
      toJSON: PlatformTypes["RemoteConfigDebugAPI"]["_configuration"]["toJSON"];
    };
    _localStorageAPI: PlatformTypes["ConnectDevicesAPI"]["connectRestrictor"]["connectRestrictions"]["localStorageAPI"];
    _overrides: {
      accessListeners: Set<any>;
      values: Map<any, any>;
    } & {
      getValue: PlatformTypes["RemoteConfigDebugAPI"]["_configuration"]["getValue"];
      toBuilder: PlatformTypes["RemoteConfigDebugAPI"]["_configuration"]["toBuilder"];
      toJSON: PlatformTypes["RemoteConfigDebugAPI"]["_configuration"]["toJSON"];
    };
    _properties: Array<
      | {
          description: string;
          localValue: boolean;
          name: string;
          remoteValue: boolean;
          source: string;
          spec: {
            defaultValue: boolean;
          };
          type: string;
        }
      | {
          description: string;
          localValue: number;
          name: string;
          remoteValue: number;
          source: string;
          spec: {
            defaultValue: number;
            lower: number;
            upper: number;
          };
          type: string;
        }
      | {
          description: string;
          localValue: string;
          name: string;
          remoteValue: string;
          source: string;
          spec: {
            defaultValue: string;
            values: PlatformTypes["RemoteConfigDebugAPI"]["_definitions"][31]["values"];
          };
          type: string;
        }
      | {
          description: string;
          localValue: string;
          name: string;
          remoteValue: string;
          source: string;
          spec: {
            defaultValue: string;
            values: PlatformTypes["RemoteConfigDebugAPI"]["_definitions"][36]["values"];
          };
          type: string;
        }
      | {
          description: string;
          localValue: string;
          name: string;
          remoteValue: string;
          source: string;
          spec: {
            defaultValue: string;
            values: PlatformTypes["RemoteConfigDebugAPI"]["_definitions"][96]["values"];
          };
          type: string;
        }
      | {
          description: string;
          localValue: string;
          name: string;
          remoteValue: string;
          source: string;
          spec: {
            defaultValue: string;
            values: PlatformTypes["RemoteConfigDebugAPI"]["_definitions"][103]["values"];
          };
          type: string;
        }
      | {
          description: string;
          localValue: string;
          name: string;
          remoteValue: string;
          source: string;
          spec: {
            defaultValue: string;
            values: PlatformTypes["RemoteConfigDebugAPI"]["_definitions"][106]["values"];
          };
          type: string;
        }
      | {
          description: string;
          localValue: string;
          name: string;
          remoteValue: string;
          source: string;
          spec: {
            defaultValue: string;
            values: PlatformTypes["RemoteConfigDebugAPI"]["_definitions"][151]["values"];
          };
          type: string;
        }
      | {
          description: string;
          localValue: string;
          name: string;
          remoteValue: string;
          source: string;
          spec: {
            defaultValue: string;
            values: PlatformTypes["RemoteConfigDebugAPI"]["_definitions"][155]["values"];
          };
          type: string;
        }
      | {
          description: string;
          localValue: string;
          name: string;
          remoteValue: string;
          source: string;
          spec: {
            defaultValue: string;
            values: PlatformTypes["RemoteConfigDebugAPI"]["_definitions"][166]["values"];
          };
          type: string;
        }
      | {
          description: string;
          localValue: string;
          name: string;
          remoteValue: string;
          source: string;
          spec: {
            defaultValue: string;
            values: PlatformTypes["RemoteConfigDebugAPI"]["_definitions"][177]["values"];
          };
          type: string;
        }
      | {
          description: string;
          localValue: string;
          name: string;
          remoteValue: string;
          source: string;
          spec: {
            defaultValue: string;
            values: PlatformTypes["RemoteConfigDebugAPI"]["_definitions"][193]["values"];
          };
          type: string;
        }
      | {
          description: string;
          localValue: string;
          name: string;
          remoteValue: string;
          source: string;
          spec: {
            defaultValue: string;
            values: PlatformTypes["RemoteConfigDebugAPI"]["_definitions"][194]["values"];
          };
          type: string;
        }
      | {
          description: string;
          localValue: string;
          name: string;
          remoteValue: string;
          source: string;
          spec: {
            defaultValue: string;
            values: PlatformTypes["RemoteConfigDebugAPI"]["_definitions"][199]["values"];
          };
          type: string;
        }
      | {
          description: string;
          localValue: string;
          name: string;
          remoteValue: string;
          source: string;
          spec: {
            defaultValue: string;
            values: PlatformTypes["RemoteConfigDebugAPI"]["_definitions"][200]["values"];
          };
          type: string;
        }
      | {
          description: string;
          localValue: string;
          name: string;
          remoteValue: string;
          source: string;
          spec: {
            defaultValue: string;
            values: PlatformTypes["RemoteConfigDebugAPI"]["_definitions"][205]["values"];
          };
          type: string;
        }
      | {
          description: string;
          localValue: string;
          name: string;
          remoteValue: string;
          source: string;
          spec: {
            defaultValue: string;
            values: PlatformTypes["RemoteConfigDebugAPI"]["_definitions"][212]["values"];
          };
          type: string;
        }
    >;
  } & {
    clearOverrides: () => Promise<any>;
    getProperties: () => Promise<any>;
    setOverride: (a: any, b: any) => any;
  } & {
    clearOverrides: PlatformTypes["RemoteConfigDebugAPI"]["clearOverrides"];
    getEvents: () => any;
    getLocalConfiguration: () => any;
    getProperties: PlatformTypes["RemoteConfigDebugAPI"]["getProperties"];
    setOverride: PlatformTypes["RemoteConfigDebugAPI"]["setOverride"];
    update: (a: any) => any;
  };
  RemoteConfiguration: PlatformTypes["RemoteConfigDebugAPI"]["_configuration"];
  RemoteConfigurationWithLocalOverrides: {
    accessListeners: Set<any>;
    values: Map<any, any>;
  } & {
    getValue: PlatformTypes["RemoteConfigDebugAPI"]["_configuration"]["getValue"];
    toBuilder: PlatformTypes["RemoteConfigDebugAPI"]["_configuration"]["toBuilder"];
    toJSON: PlatformTypes["RemoteConfigDebugAPI"]["_configuration"]["toJSON"];
  };
  ReportAPI: {
    _playlistAPI: PlatformTypes["CurationAPI"]["_playlistAPI"];
    _productState: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      delOverridesValues: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"]["delOverridesValues"];
      getValues: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"]["getValues"];
      putOverridesValues: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"]["putOverridesValues"];
      putValues: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"]["putValues"];
      putValuesSync: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"]["putValuesSync"];
      subValues: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"]["subValues"];
    };
  } & {
    canReportPlaylist: (a: any, b: any) => any;
    getReportURL: (a: any, b: any) => any;
    isURIReportable: (a: any) => any;
  };
  RequestBuilder: PlatformTypes["AdManagers"]["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
  RootlistAPI: {
    _builder: PlatformTypes["AdManagers"]["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
    _cache: null;
    _decorationCache: {
      _cache: Map<any, any>;
      _ttl: number;
    } & {
      cleanup: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["cleanup"];
      clear: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["clear"];
      create: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["create"];
      delete: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["delete"];
      entries: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["entries"];
      get: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["get"];
      getExpiry: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["getExpiry"];
      has: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["has"];
      isExpired: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["isExpired"];
      peek: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["peek"];
      set: PlatformTypes["CollectionPlatformAPI"]["cacheBySet"]["artist"]["set"];
    };
    _events: {
      _aggregator: {
        _additions: {
          clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
          delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
          entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
          forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
          get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
          has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
          keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
          set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
          size: number;
          values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
        };
        _batch: {
          clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
          delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
          entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
          forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
          get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
          has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
          keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
          set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
          size: number;
          values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
        };
        _deletions: {
          clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
          delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
          entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
          forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
          get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
          has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
          keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
          set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
          size: number;
          values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
        };
        _onAdd: (a: any, b: any) => any;
        _onBatch: (a: any) => any;
        _onRemove: (a: any, b: any) => any;
        _onUpdate: (a: any, b: any, c: any) => any;
        _timeout: number;
        _timeoutId: null;
      } & {
        getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
        onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
        scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
        subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
        unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
      };
      _contains: (a: any) => any;
      _dataClient: {
        options: {};
        transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
      } & {
        contains: (a: any, b: any) => any;
        get: (a: any, b: any) => any;
        getOfflinePlaylistsContainingItem: (a: any, b: any) => any;
        subscribe: (a: any, b: any) => any;
      };
      _emitter: {
        _listeners: {
          operation: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
          update: Array<{
            listener: () => undefined;
            options: {};
          }>;
        };
        _metaListeners: {
          add: {
            update: Array<{
              listener: () => undefined;
              options: {};
            }>;
            update_item: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
          };
          remove: {
            update: Array<{
              listener: () => undefined;
              options: {};
            }>;
            update_item: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
          };
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
      _numListeners: number;
      _subscription: null;
    } & {
      onContainsItems: (a: any) => any;
      onUpdate: () => Promise<any>;
      subscribeToUpdates: () => any;
      unsubscribeFromUpdates: () => any;
    } & {
      emitAddComplete: (a: any, b: any) => any;
      emitAddSync: (a: any, b: any, c: any) => any;
      emitCreatePlaylistComplete: (a: any, b: any) => any;
      emitCreatePlaylistSync: (a: any, b: any, c: any) => any;
      emitMoveComplete: (a: any, b: any) => any;
      emitMoveSync: (a: any, b: any) => any;
      emitRemoveComplete: (a: any) => any;
      emitRemoveSync: (a: any) => any;
      emitUpdateItems: (a: any, b: any) => any;
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    _playlistDataClient: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      find: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_playlist"]["find"];
      get: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_playlist"]["get"];
      multiGet: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_playlist"]["multiGet"];
      subscribe: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_playlist"]["subscribe"];
    };
    _rootlistDataClient: PlatformTypes["RootlistAPI"]["_events"]["_dataClient"];
    _rootlistModificationClient: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      modify: (a: any, b: any) => any;
    };
  } & {
    add: (a: any, b: any) => any;
    applyModification: (a: any) => any;
    contains: (a: any) => any;
    containsSync: (a: any) => any;
    createFolder: (a: any, b: any) => any;
    createPlaylist: (a: any, b: any, c: any) => any;
    getCapabilities: () => {
      canFilter: boolean;
      canModifyOffline: boolean;
      canSort: boolean;
    };
    getContents: (a: any) => any;
    getEvents: () => any;
    getMetadata: () => Promise<any>;
    getPublishedState: (a: any) => any;
    move: (a: any, b: any, c: any) => any;
    moveFolder: (a: any, b: any) => any;
    onUpdateItems: (a: any, b: any) => any;
    remove: (a: any) => any;
    removeFolder: (a: any) => any;
    renameFolder: (a: any, b: any) => any;
    setPublishedState: (a: any, b: any) => any;
  };
  SEOExperiments: {};
  SegmentsAPI: {
    _client: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      getDisplaySegments: (a: any, b: any) => any;
    };
  } & {
    getArtists: () => Promise<any>;
    getCapabilities: () => {
      isSupported: boolean;
    };
    getSegments: (a: any, b: any, c: any) => any;
  };
  ServiceWorkerMessenger: Promise<any>;
  Session: {
    accessToken: string;
    accessTokenExpirationTimestampMs: number;
    isAnonymous: boolean;
    locale: string;
    market: string;
    tokenType: string;
    valid: boolean;
  };
  SettingsAPI: {
    autoPlay: {
      autoPlaySupported: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        prefsApi: {
          options: {};
          transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
        } & {
          create: PlatformTypes["EqualizerAPI"]["prefs"]["create"];
          get: PlatformTypes["EqualizerAPI"]["prefs"]["get"];
          getAll: PlatformTypes["EqualizerAPI"]["prefs"]["getAll"];
          set: PlatformTypes["EqualizerAPI"]["prefs"]["set"];
          sub: PlatformTypes["EqualizerAPI"]["prefs"]["sub"];
          subAll: PlatformTypes["EqualizerAPI"]["prefs"]["subAll"];
        };
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        getValue: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["subValue"];
      };
      deserialize: (a: any) => any;
      getValue: () => Promise<any>;
      identifier: string;
      key: string;
      productStateApi: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"];
      serialize: (a: any) => any;
      setValue: (a: any) => any;
      subValue: (a: any) => any;
      subs: Set<any>;
      subscription: null;
      value: null;
    } & {
      getValue: PlatformTypes["SettingsAPI"]["autoPlay"]["getValue"];
    } & {
      setValue: PlatformTypes["SettingsAPI"]["autoPlay"]["setValue"];
    } & {
      getValue: PlatformTypes["SettingsAPI"]["autoPlay"]["getValue"];
      subValue: PlatformTypes["SettingsAPI"]["autoPlay"]["subValue"];
    };
    contentPreferences: {
      allowExplicitContent: {
        deserialize: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        productStateApi: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"];
        serialize: (a: any) => any;
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["contentPreferences"]["allowExplicitContent"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["contentPreferences"]["allowExplicitContent"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["contentPreferences"]["allowExplicitContent"]["subValue"];
      };
      explicitContentForceDisallowed: {
        deserialize: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        productStateApi: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"];
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        getValue: PlatformTypes["SettingsAPI"]["contentPreferences"]["explicitContentForceDisallowed"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["contentPreferences"]["explicitContentForceDisallowed"]["subValue"];
      };
    };
    display: {
      nativeNotificationOnPlayerTransition: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: (a: any) => any;
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["display"]["nativeNotificationOnPlayerTransition"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["display"]["nativeNotificationOnPlayerTransition"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["display"]["nativeNotificationOnPlayerTransition"]["subValue"];
      };
      nativeOverlayOnMediaKeys: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["display"]["nativeNotificationOnPlayerTransition"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["display"]["nativeOverlayOnMediaKeys"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["display"]["nativeOverlayOnMediaKeys"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["display"]["nativeOverlayOnMediaKeys"]["subValue"];
      };
      newReleasesAnnoucements: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: (a: any) => any;
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["display"]["newReleasesAnnoucements"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["display"]["newReleasesAnnoucements"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["display"]["newReleasesAnnoucements"]["subValue"];
      };
    };
    employee: {
      developerMode: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["display"]["nativeNotificationOnPlayerTransition"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["employee"]["developerMode"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["employee"]["developerMode"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["employee"]["developerMode"]["subValue"];
      };
      isEmployee: {
        deserialize: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        productStateApi: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"];
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: () => undefined;
        value: null;
      } & {
        getValue: PlatformTypes["SettingsAPI"]["employee"]["isEmployee"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["employee"]["isEmployee"]["subValue"];
      };
      jayApi: {
        getServerAddress: () => null;
      };
      showChromeToolbar: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["display"]["nativeNotificationOnPlayerTransition"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["employee"]["showChromeToolbar"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["employee"]["showChromeToolbar"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["employee"]["showChromeToolbar"]["subValue"];
      };
    };
    hardwareAcceleration: {
      deserializeValue: (a: any) => any;
      getValue: () => Promise<any>;
      identifier: string;
      key: string;
      prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
      serializeValue: PlatformTypes["SettingsAPI"]["display"]["nativeNotificationOnPlayerTransition"]["serializeValue"];
      setValue: (a: any) => any;
      subValue: (a: any) => any;
      subs: Set<any>;
      subscription: null;
      value: null;
    } & {
      setValue: PlatformTypes["SettingsAPI"]["hardwareAcceleration"]["setValue"];
    } & {
      getValue: PlatformTypes["SettingsAPI"]["hardwareAcceleration"]["getValue"];
      subValue: PlatformTypes["SettingsAPI"]["hardwareAcceleration"]["subValue"];
    };
    language: {
      deserializeValue: (a: any) => any;
      getValue: () => Promise<any>;
      identifier: string;
      key: string;
      prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
      serializeValue: (a: any) => any;
      setValue: (a: any) => any;
      subValue: (a: any) => any;
      subs: Set<any>;
      subscription: null;
      value: null;
    } & {
      setValue: PlatformTypes["SettingsAPI"]["language"]["setValue"];
    } & {
      getValue: PlatformTypes["SettingsAPI"]["language"]["getValue"];
      subValue: PlatformTypes["SettingsAPI"]["language"]["subValue"];
    };
    playback: {
      audioCrossfade: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["display"]["nativeNotificationOnPlayerTransition"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["playback"]["audioCrossfade"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["playback"]["audioCrossfade"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["playback"]["audioCrossfade"]["subValue"];
      };
      audioCrossfadeMs: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: (a: any) => any;
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["playback"]["audioCrossfadeMs"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["playback"]["audioCrossfadeMs"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["playback"]["audioCrossfadeMs"]["subValue"];
      };
      autoMix: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["display"]["nativeNotificationOnPlayerTransition"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["playback"]["autoMix"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["playback"]["autoMix"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["playback"]["autoMix"]["subValue"];
      };
      loudnessBalancePodcasts: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["display"]["nativeNotificationOnPlayerTransition"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["playback"]["loudnessBalancePodcasts"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["playback"]["loudnessBalancePodcasts"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["playback"]["loudnessBalancePodcasts"]["subValue"];
      };
      monoAudio: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["display"]["nativeNotificationOnPlayerTransition"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["playback"]["monoAudio"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["playback"]["monoAudio"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["playback"]["monoAudio"]["subValue"];
      };
      smartShuffle: {
        getValue: () => Promise<any>;
        key: string;
        playbackSettingsAPI: {
          options: {};
          transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
        } & {
          disableSmartShuffle: (a: any, b: any) => any;
          getDisableSmartShuffle: (a: any, b: any) => any;
          getShuffleState: (a: any, b: any) => any;
          setDisableSmartShuffle: (a: any, b: any) => any;
          setShuffleState: (a: any, b: any) => any;
        };
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        unsubscribeFromDisableSmartShuffle: null;
        value: boolean;
      } & {
        getValue: PlatformTypes["SettingsAPI"]["playback"]["smartShuffle"]["getValue"];
        setValue: PlatformTypes["SettingsAPI"]["playback"]["smartShuffle"]["setValue"];
        subValue: PlatformTypes["SettingsAPI"]["playback"]["smartShuffle"]["subValue"];
      };
    };
    proxySettings: {
      address: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["language"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["proxySettings"]["address"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["proxySettings"]["address"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["proxySettings"]["address"]["subValue"];
      };
      mode: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["playback"]["audioCrossfadeMs"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["proxySettings"]["mode"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["proxySettings"]["mode"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["proxySettings"]["mode"]["subValue"];
      };
      password: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["language"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["proxySettings"]["password"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["proxySettings"]["password"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["proxySettings"]["password"]["subValue"];
      };
      username: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["language"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["proxySettings"]["username"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["proxySettings"]["username"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["proxySettings"]["username"]["subValue"];
      };
    };
    quality: {
      autoAdjustQuality: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["display"]["nativeNotificationOnPlayerTransition"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["quality"]["autoAdjustQuality"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["quality"]["autoAdjustQuality"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["quality"]["autoAdjustQuality"]["subValue"];
      };
      downloadAudioQuality: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        maxSupportedQuality: {
          clampAudioQuality: (a: any) => any;
          deserialize: (a: any) => any;
          getValue: () => Promise<any>;
          identifier: string;
          key: string;
          productStateApi: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"];
          subValue: (a: any) => any;
          subs: Set<any>;
          subscription: null;
          value: null;
        } & {
          clampAudioQuality: PlatformTypes["SettingsAPI"]["quality"]["downloadAudioQuality"]["maxSupportedQuality"]["clampAudioQuality"];
        } & {
          getValue: PlatformTypes["SettingsAPI"]["quality"]["downloadAudioQuality"]["maxSupportedQuality"]["getValue"];
          subValue: PlatformTypes["SettingsAPI"]["quality"]["downloadAudioQuality"]["maxSupportedQuality"]["subValue"];
        };
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["playback"]["audioCrossfadeMs"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["quality"]["downloadAudioQuality"]["setValue"];
      } & {
        setValue: PlatformTypes["SettingsAPI"]["quality"]["downloadAudioQuality"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["quality"]["downloadAudioQuality"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["quality"]["downloadAudioQuality"]["subValue"];
      };
      maxSupportedQuality: PlatformTypes["SettingsAPI"]["quality"]["downloadAudioQuality"]["maxSupportedQuality"];
      normalizeVolume: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["display"]["nativeNotificationOnPlayerTransition"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["quality"]["normalizeVolume"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["quality"]["normalizeVolume"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["quality"]["normalizeVolume"]["subValue"];
      };
      parrot: {
        getValue: () => Promise<any>;
        key: string;
        setValue: () => Promise<any>;
        subValue: () => () => undefined;
      } & {
        getValue: PlatformTypes["SettingsAPI"]["quality"]["parrot"]["getValue"];
        setValue: PlatformTypes["SettingsAPI"]["quality"]["parrot"]["setValue"];
        subValue: PlatformTypes["SettingsAPI"]["quality"]["parrot"]["subValue"];
      };
      playbackService: {
        options: {};
        transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
      } & {
        duck: PlatformTypes["PlaybackAPI"]["_playbackService"]["duck"];
        getFiles: PlatformTypes["PlaybackAPI"]["_playbackService"]["getFiles"];
        getFormats: PlatformTypes["PlaybackAPI"]["_playbackService"]["getFormats"];
        getPlaybackInfo: PlatformTypes["PlaybackAPI"]["_playbackService"]["getPlaybackInfo"];
        getRawVolume: PlatformTypes["PlaybackAPI"]["_playbackService"]["getRawVolume"];
        getVolume: PlatformTypes["PlaybackAPI"]["_playbackService"]["getVolume"];
        lowerVolume: PlatformTypes["PlaybackAPI"]["_playbackService"]["lowerVolume"];
        raiseVolume: PlatformTypes["PlaybackAPI"]["_playbackService"]["raiseVolume"];
        setRawVolume: PlatformTypes["PlaybackAPI"]["_playbackService"]["setRawVolume"];
        setVolume: PlatformTypes["PlaybackAPI"]["_playbackService"]["setVolume"];
        subBufferUnderrun: PlatformTypes["PlaybackAPI"]["_playbackService"]["subBufferUnderrun"];
        subPlaybackInfo: PlatformTypes["PlaybackAPI"]["_playbackService"]["subPlaybackInfo"];
        subPosition: PlatformTypes["PlaybackAPI"]["_playbackService"]["subPosition"];
        subRawVolume: PlatformTypes["PlaybackAPI"]["_playbackService"]["subRawVolume"];
        subVolume: PlatformTypes["PlaybackAPI"]["_playbackService"]["subVolume"];
      };
      remoteQuality: {
        callbacks: Set<any>;
        connectService: {
          options: {};
          transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
        } & {
          becomeInactive: PlatformTypes["ConnectAPI"]["connectServiceClient"]["becomeInactive"];
          cancelTransfer: PlatformTypes["ConnectAPI"]["connectServiceClient"]["cancelTransfer"];
          forceDiscover: PlatformTypes["ConnectAPI"]["connectServiceClient"]["forceDiscover"];
          getDebugLevel: PlatformTypes["ConnectAPI"]["connectServiceClient"]["getDebugLevel"];
          getDeviceSettings: PlatformTypes["ConnectAPI"]["connectServiceClient"]["getDeviceSettings"];
          installSpotify: PlatformTypes["ConnectAPI"]["connectServiceClient"]["installSpotify"];
          logout: PlatformTypes["ConnectAPI"]["connectServiceClient"]["logout"];
          notifyAudioRouteChanged: PlatformTypes["ConnectAPI"]["connectServiceClient"]["notifyAudioRouteChanged"];
          performDiscovery: PlatformTypes["ConnectAPI"]["connectServiceClient"]["performDiscovery"];
          pickerOpened: PlatformTypes["ConnectAPI"]["connectServiceClient"]["pickerOpened"];
          pull: PlatformTypes["ConnectAPI"]["connectServiceClient"]["pull"];
          refreshCluster: PlatformTypes["ConnectAPI"]["connectServiceClient"]["refreshCluster"];
          rename: PlatformTypes["ConnectAPI"]["connectServiceClient"]["rename"];
          sendCommand: PlatformTypes["ConnectAPI"]["connectServiceClient"]["sendCommand"];
          setDebugLevel: PlatformTypes["ConnectAPI"]["connectServiceClient"]["setDebugLevel"];
          setDeviceStreamQuality: PlatformTypes["ConnectAPI"]["connectServiceClient"]["setDeviceStreamQuality"];
          setPreferredZeroconf: PlatformTypes["ConnectAPI"]["connectServiceClient"]["setPreferredZeroconf"];
          startDiscovery: PlatformTypes["ConnectAPI"]["connectServiceClient"]["startDiscovery"];
          state: PlatformTypes["ConnectAPI"]["connectServiceClient"]["state"];
          transfer: PlatformTypes["ConnectAPI"]["connectServiceClient"]["transfer"];
          wakeSleepingClusterDevices: PlatformTypes["ConnectAPI"]["connectServiceClient"]["wakeSleepingClusterDevices"];
        };
        key: string;
        stateSubscription: null;
      } & {
        getActiveDeviceId: () => Promise<any>;
        getValue: (a: any) => any;
        setValue: (a: any) => any;
        subValue: (a: any) => any;
      };
      streamingQuality: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        maxSupportedQuality: PlatformTypes["SettingsAPI"]["quality"]["downloadAudioQuality"]["maxSupportedQuality"];
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["playback"]["audioCrossfadeMs"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["quality"]["streamingQuality"]["setValue"];
      } & {
        setValue: PlatformTypes["SettingsAPI"]["quality"]["streamingQuality"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["quality"]["streamingQuality"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["quality"]["streamingQuality"]["subValue"];
      };
      volumeLevel: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["playback"]["audioCrossfadeMs"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["quality"]["volumeLevel"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["quality"]["volumeLevel"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["quality"]["volumeLevel"]["subValue"];
      };
    } & {
      getFormats: () => Promise<any>;
    };
    social: {
      autoPublishPlaylist: {
        deserialize: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        productStateApi: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"];
        serialize: PlatformTypes["SettingsAPI"]["autoPlay"]["serialize"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["social"]["autoPublishPlaylist"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["social"]["autoPublishPlaylist"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["social"]["autoPublishPlaylist"]["subValue"];
      };
      privateSession: {
        getValue: () => Promise<any>;
        key: string;
        privateSessionAPI: PlatformTypes["PrivateSessionAPI"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        unsubscribeFromPrivateSession: null;
        value: boolean;
      } & {
        getValue: PlatformTypes["SettingsAPI"]["social"]["privateSession"]["getValue"];
        setValue: PlatformTypes["SettingsAPI"]["social"]["privateSession"]["setValue"];
        subValue: PlatformTypes["SettingsAPI"]["social"]["privateSession"]["subValue"];
      };
      shareListeningActivity: {
        deserialize: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        productStateApi: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"];
        serialize: PlatformTypes["SettingsAPI"]["autoPlay"]["serialize"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["social"]["shareListeningActivity"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["social"]["shareListeningActivity"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["social"]["shareListeningActivity"]["subValue"];
      };
      showMyTopArtists: {
        deserialize: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        productStateApi: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"];
        serialize: PlatformTypes["SettingsAPI"]["autoPlay"]["serialize"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["social"]["showMyTopArtists"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["social"]["showMyTopArtists"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["social"]["showMyTopArtists"]["subValue"];
      };
    };
    startupBehaviour: {
      autoStartMode: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: (a: any) => any;
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["startupBehaviour"]["autoStartMode"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["startupBehaviour"]["autoStartMode"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["startupBehaviour"]["autoStartMode"]["subValue"];
      };
      closeToTray: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["display"]["nativeNotificationOnPlayerTransition"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["startupBehaviour"]["closeToTray"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["startupBehaviour"]["closeToTray"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["startupBehaviour"]["closeToTray"]["subValue"];
      };
      enableLauncher: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["display"]["nativeNotificationOnPlayerTransition"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["startupBehaviour"]["enableLauncher"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["startupBehaviour"]["enableLauncher"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["startupBehaviour"]["enableLauncher"]["subValue"];
      };
    };
    storage: {
      storageLocation: {
        deserializeValue: (a: any) => any;
        getValue: () => Promise<any>;
        identifier: string;
        key: string;
        prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
        serializeValue: PlatformTypes["SettingsAPI"]["language"]["serializeValue"];
        setValue: (a: any) => any;
        subValue: (a: any) => any;
        subs: Set<any>;
        subscription: null;
        value: null;
      } & {
        setValue: PlatformTypes["SettingsAPI"]["storage"]["storageLocation"]["setValue"];
      } & {
        getValue: PlatformTypes["SettingsAPI"]["storage"]["storageLocation"]["getValue"];
        subValue: PlatformTypes["SettingsAPI"]["storage"]["storageLocation"]["subValue"];
      };
    };
    viewportZoom: {
      deserializeValue: (a: any) => any;
      getValue: () => Promise<any>;
      identifier: string;
      key: string;
      prefsApi: PlatformTypes["SettingsAPI"]["autoPlay"]["autoPlaySupported"]["prefsApi"];
      subValue: (a: any) => any;
      subs: Set<any>;
      subscription: {
        cancel: () => undefined;
      };
      value: number;
      zoomApi: {
        zoomEsperanto: {
          options: {};
          transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
        } & {
          getZoomLevel: (a: any, b: any) => any;
          setZoomLevel: (a: any, b: any) => any;
          zoomIn: (a: any, b: any) => any;
          zoomOut: (a: any, b: any) => any;
        };
      } & {
        getCapabilities: () => {
          canGetZoomLevel: boolean;
          canSetZoomLevel: boolean;
          canZoomIn: boolean;
          canZoomOut: boolean;
        };
        getZoomLevel: () => Promise<any>;
        setZoomLevel: (a: any) => any;
        zoomIn: () => any;
        zoomOut: () => any;
      };
    } & {
      setValue: (a: any) => any;
    } & {
      getValue: PlatformTypes["SettingsAPI"]["viewportZoom"]["getValue"];
      subValue: PlatformTypes["SettingsAPI"]["viewportZoom"]["subValue"];
    };
  };
  ShowAPI: {
    _builder: PlatformTypes["AdManagers"]["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
    _events: {
      _aggregator: {
        _additions: {
          clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
          delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
          entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
          forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
          get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
          has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
          keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
          set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
          size: number;
          values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
        };
        _batch: {
          clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
          delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
          entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
          forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
          get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
          has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
          keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
          set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
          size: number;
          values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
        };
        _deletions: {
          clear: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["clear"];
          delete: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["delete"];
          entries: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["entries"];
          forEach: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["forEach"];
          get: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["get"];
          has: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["has"];
          keys: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["keys"];
          set: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["set"];
          size: number;
          values: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["_additions"]["values"];
        };
        _onAdd: (a: any, b: any) => any;
        _onBatch: (a: any) => any;
        _onRemove: (a: any, b: any) => any;
        _onUpdate: (a: any, b: any, c: any) => any;
        _timeout: number;
        _timeoutId: null;
      } & {
        getBatch: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["getBatch"];
        onUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["onUpdate"];
        scheduleUpdate: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["scheduleUpdate"];
        subscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["subscribe"];
        unsubscribe: PlatformTypes["CollectionPlatformAPI"]["events"]["_aggregatorByCollection2Set"]["artist"]["unsubscribe"];
      };
      _emitter: {
        _listeners: {};
        _metaListeners: {
          add: {
            update_resume_episode_link: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
          };
          remove: {
            update_resume_episode_link: Array<{
              listener: (a: any) => any;
              options: {};
            }>;
          };
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
      _show_client: {
        options: {};
        transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
      } & {
        getDecorate: (a: any, b: any) => any;
        getShow: (a: any, b: any) => any;
        getShowEpisode: (a: any, b: any) => any;
        getUnfinishedEpisodes: (a: any, b: any) => any;
        markShowAsPlayed: (a: any, b: any) => any;
        playShow: (a: any, b: any) => any;
        subDecorate: (a: any, b: any) => any;
        subShow: (a: any, b: any) => any;
        subShowEpisode: (a: any, b: any) => any;
        subUnfinishedEpisodes: (a: any, b: any) => any;
      };
      _subscriptions: Map<any, any>;
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    _isAuthorPageEnabled: boolean;
    _metadata_service_client: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      expire: PlatformTypes["CurationAPI"]["_playlistAPI"]["_smartShuffleEligibilityAPI"]["_metadataServiceClient"]["expire"];
      fetch: PlatformTypes["CurationAPI"]["_playlistAPI"]["_smartShuffleEligibilityAPI"]["_metadataServiceClient"]["fetch"];
      observe: PlatformTypes["CurationAPI"]["_playlistAPI"]["_smartShuffleEligibilityAPI"]["_metadataServiceClient"]["observe"];
      purge: PlatformTypes["CurationAPI"]["_playlistAPI"]["_smartShuffleEligibilityAPI"]["_metadataServiceClient"]["purge"];
    };
    _podcast_paywalls_client: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      putShowSubscription: (a: any, b: any) => any;
    };
    _pubSubAPI: PlatformTypes["BuddyFeedAPI"]["batchAPI"]["presence2"]["pubsub"];
    _resumption_progress_client: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      getDetails: (a: any, b: any) => any;
      getState: (a: any, b: any) => any;
      subDetails: (a: any, b: any) => any;
      subState: (a: any, b: any) => any;
    };
    _show_service_client: PlatformTypes["ShowAPI"]["_events"]["_show_client"];
    capabilities: {
      canFilter: boolean;
      canGetDefaultSort: boolean;
      canGetShowPlayedState: boolean;
      canMarkAsFinished: boolean;
      canSort: boolean;
    };
  } & {
    _fetchItemDetails: (a: any) => any;
    _fetchItemsDetailsProgressResumptionFromShowResponse: (a: any) => any;
    _onShowAccessUpdate: (a: any) => any;
    checkoutBook: (a: any) => any;
    getAccessInfo: (a: any) => any;
    getBookContents: (a: any, b: any) => any;
    getContents: (a: any, b: any) => any;
    getEpisodeOrChapter: (a: any) => any;
    getEvents: () => any;
    getMetadata: (a: any) => any;
    getPlayerFilter: () => string;
    getPlayerSort: (a: any) => any;
    getShowPlayedState: (a: any) => any;
    invalidateShowMetadataCaches: (a: any) => any;
    markShowPlayedLegacy: (a: any, b: any) => any;
    updateUserRating: (a: any, b: any) => any;
  };
  ShuffleAPI: {
    _contextualShuffle: PlatformTypes["ContextualShuffleAPI"];
    _events: {
      _emitter: {
        _listeners: {
          availability_update: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
          update: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
          update_complete: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
          update_error: Array<{
            listener: () => undefined;
            options: {};
          }>;
        };
        _metaListeners: {
          add: {};
          remove: {};
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
    } & {
      emitAvailabilityUpdate: (a: any) => any;
      emitUpdateShuffleModeCompleteSync: (a: any, b: any) => any;
      emitUpdateShuffleModeErrorSync: (a: any, b: any) => any;
      emitUpdateShuffleModeSync: (a: any, b: any) => any;
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    _history: PlatformTypes["AdManagers"]["adStateReporter"]["history"];
    _isDsaEnabled: boolean;
    _player: PlatformTypes["PlayerAPI"];
    _playlistDataServiceClient: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      find: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_playlist"]["find"];
      get: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_playlist"]["get"];
      multiGet: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_playlist"]["multiGet"];
      subscribe: PlatformTypes["CurationAPI"]["_libraryAPI"]["_events"]["_playlist"]["subscribe"];
    };
    _playlistServiceClient: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      clearToken: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["clearToken"];
      contains: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["contains"];
      emitItemSignals: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["emitItemSignals"];
      emitSignals: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["emitSignals"];
      getMembers: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["getMembers"];
      invalidateRevisions: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["invalidateRevisions"];
      modify: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["modify"];
      requestLenses: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["requestLenses"];
      resync: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["resync"];
      setBasePermission: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setBasePermission"];
      setMemberPermission: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setMemberPermission"];
      setOfflineState: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setOfflineState"];
      setToken: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["setToken"];
      signal: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["signal"];
      signalItem: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["signalItem"];
      subscribeToMembers: PlatformTypes["CurationAPI"]["_libraryAPI"]["_playlistServiceClient"]["subscribeToMembers"];
    };
    _productStateApi: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"];
    _smartShuffleEligibility: PlatformTypes["CurationAPI"]["_playlistAPI"]["_smartShuffleEligibilityAPI"];
    isSmartShuffleEnabled: boolean;
  } & {
    _syncShuffle: (a: any, b: any) => any;
    getAvailableShuffleModes: (a: any) => any;
    getEvents: () => any;
    getShuffle: (a: any) => any;
    setShuffle: (a: any, b: any) => any;
  };
  SingAlongAPI: {
    karaokeServiceClient: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      getStatus: (a: any, b: any) => any;
      postStatus: (a: any, b: any) => any;
      postVocalVolume: (a: any, b: any) => any;
      subscribeToEvents: (a: any, b: any) => any;
    };
  } & {
    getCapabilities: () => {
      isSupported: boolean;
    };
    getStatus: () => Promise<any>;
    setStatus: (a: any) => any;
    setVocalVolume: (a: any) => any;
  };
  SmartShuffleEligibilityAPI: PlatformTypes["CurationAPI"]["_playlistAPI"]["_smartShuffleEligibilityAPI"];
  SocialConnectAPI: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"];
  StandalonePlayerCoordinatorAPI: {
    connectDevicesAPI: PlatformTypes["ConnectDevicesAPI"];
    currentActiveInstance: null;
    currentPlayerVolume: number;
    instances: {
      delete: (a: any) => any;
      get: (a: any) => any;
      has: (a: any) => any;
      set: (a: any, b: any) => any;
    };
    playbackAPI: PlatformTypes["PlaybackAPI"];
    playerAPI: PlatformTypes["PlayerAPI"];
  } & {
    createStandalonePlayerInstance: (a: any) => any;
    deleteStandalonePlayerInstance: (a: any) => any;
    inactivateInstance: (a: any) => any;
    setupPlayerListeners: () => any;
    setupStandalonePlayerListeners: (a: any) => any;
  };
  Translations: {
    "a11y.externalLink": string;
    "about.copyright": string;
    "about.title_label": string;
    "about.upgrade.downloaded": string;
    "about.upgrade.downloading": string;
    "about.upgrade.pending": string;
    "about.upgrade.pending_link": string;
    "about.upgrade.restart_link": string;
    "acq.artist.about.attribution": string;
    "action-trigger.available-in-app-only": string;
    "action-trigger.button.get-app": string;
    "action-trigger.button.not-now": string;
    "action-trigger.create-playlist": string;
    "action-trigger.listen-mixed-media-episode": string;
    "action-trigger.log-in-follow-profile": string;
    "action-trigger.log-in-like-action": string;
    "action-trigger.log-in-or-sign-up": string;
    "action-trigger.logged-out": string;
    "action-trigger.logged-out-continue": string;
    "action-trigger.logged-out-full-track": string;
    "action-trigger.logged-out-queue": string;
    "action-trigger.logged-out-radio": string;
    "action-trigger.logged-out-synced": string;
    "action-trigger.login-playlist": string;
    "action-trigger.save-album": string;
    "action-trigger.save-library": string;
    "ad-formats.ad-feedback.beta-tag": string;
    "ad-formats.ad-feedback.dislike": string;
    "ad-formats.ad-feedback.dislike.do-not-like": string;
    "ad-formats.ad-feedback.dislike.no-ads-upsell": string;
    "ad-formats.ad-feedback.dislike.not-relevant": string;
    "ad-formats.ad-feedback.dislike.offensive-content": string;
    "ad-formats.ad-feedback.dislike.too-often": string;
    "ad-formats.ad-feedback.dislike.unpleasant-content": string;
    "ad-formats.ad-feedback.like": string;
    "ad-formats.ad-feedback.like.discovered-new": string;
    "ad-formats.ad-feedback.like.enjoyable-content": string;
    "ad-formats.ad-feedback.like.interested-in-brand": string;
    "ad-formats.ad-feedback.like.interested-in-product": string;
    "ad-formats.ad-feedback.like.relevant": string;
    "ad-formats.ad-feedback.thanks-for-feedback": string;
    "ad-formats.advertisement": string;
    "ad-formats.advertisement-break": string;
    "ad-formats.advertisement-break-countdown-minutes-seconds": string;
    "ad-formats.advertisement-break-countdown-seconds": string;
    "ad-formats.advertisement-break-no-title": string;
    "ad-formats.context-menu.not-interested": string;
    "ad-formats.dismissAd": string;
    "ad-formats.dsa.aboutThisAd": string;
    "ad-formats.dsa.modal.aboutTailoredAds": string;
    "ad-formats.dsa.modal.adBasedInfoExplanation": string;
    "ad-formats.dsa.modal.adRelevancyAction": string;
    "ad-formats.dsa.modal.editProfile": string;
    "ad-formats.dsa.modal.otherInfo": string;
    "ad-formats.dsa.modal.privacySetting": string;
    "ad-formats.dsa.modal.profileInfo": string;
    "ad-formats.dsa.modal.tailoredAds": string;
    "ad-formats.dsa.modal.targeting.age": string;
    "ad-formats.dsa.modal.targeting.gender": string;
    "ad-formats.dsa.modal.targeting.interests": string;
    "ad-formats.dsa.modal.targeting.location": string;
    "ad-formats.dsa.modal.targeting.unknown": string;
    "ad-formats.exclusive": string;
    "ad-formats.hideAnnouncements": string;
    "ad-formats.learnMore": string;
    "ad-formats.npv.header.music-context": string;
    "ad-formats.npv.header.podcast-context": string;
    "ad-formats.presentedBy": string;
    "ad-formats.remove": string;
    "ad-formats.save": string;
    "ad-formats.skippable_ads.skip_countdown": string;
    "ad-formats.sponsored": string;
    "ad-formats.sponsored-playlist.header.reward-description": string;
    "ad-formats.sponsored-playlist.header.reward-title": string;
    "ad-formats.sponsored-playlist.header.sponsored-by": string;
    "ad-formats.sponsored-playlist.preroll.reward-message": string;
    "ad-formats.sponsored-playlist.scroll-card.error-button": string;
    "ad-formats.sponsored-playlist.scroll-card.error-subtitle": string;
    "ad-formats.sponsored-playlist.scroll-card.error-title": string;
    "ad-formats.sponsored-playlist.scroll-card.offline-subtitle": string;
    "ad-formats.sponsored-playlist.scroll-card.offline-title": string;
    "ad-formats.sponsored-playlist.scroll-card.title": string;
    "ad-formats.survey-connected-note": string;
    "ad-formats.survey-music-content": string;
    "ad-formats.survey-podcast-content": string;
    "ad-formats.survey-submit-button": string;
    "ad-formats.survey-thankyou": string;
    "ad-formats.video-ad-overlay.cta-button": string;
    "addToPlaylist-icon.label": string;
    "age.restriction.confirmAge": string;
    "age.restriction.continue": string;
    "age.restriction.explicitContent": string;
    "age.restriction.nineeteen-badge": string;
    album: string;
    "album-page.more-by-artist": string;
    "album-page.more-releases": {
      one: string;
      other: string;
    };
    "album.page-title": string;
    already_have_account: string;
    artist: string;
    "artist-page-discography.all": string;
    "artist-page.appearson.seo.title": string;
    "artist-page.artist-playlists": string;
    "artist-page.artist-playlists.seo.title": string;
    "artist-page.artists-pick": string;
    "artist-page.discography": string;
    "artist-page.discography.seo.title": string;
    "artist-page.discovered-on": string;
    "artist-page.fansalsolike": string;
    "artist-page.fansalsolike.seo.title": string;
    "artist-page.featuring": string;
    "artist-page.featuring.seo.title": string;
    "artist-page.how-many-listeners": {
      one: string;
      other: string;
    };
    "artist-page.liked-songs-by-artist-title": string;
    "artist-page.merch": string;
    "artist-page.popular": string;
    "artist-page.saved-by-artist": string;
    "artist-page.saved-header": string;
    "artist-page.saved-tracks-amount": {
      one: string;
      other: string;
    };
    "artist-page.show-discography": string;
    "artist-page.tracks.seemore": string;
    "artist-page.tracks.showless": string;
    "artist-page.watch-more-from-artist": string;
    "artist-page.where-people-listen-from": string;
    "artist-page.world_rank": string;
    "artist.about": string;
    "artist.albums": string;
    "artist.appears-on": string;
    "artist.ban-label.ban": string;
    "artist.ban-label.unban": string;
    "artist.compilations": string;
    "artist.concerts.artist_tour_dates": string;
    "artist.concerts.error.not_found": string;
    "artist.latest-release": string;
    "artist.monthly-listeners-count": {
      one: string;
      other: string;
    };
    "artist.popular-tracks": string;
    "artist.singles": string;
    "artist.verified": string;
    "audiobook.freePriceDescription": string;
    "audiobook.freePriceExplanation": string;
    "audiobook.page.sample": string;
    "authorization-status.badge": string;
    "authorization-status.dismiss": string;
    "authorization-status.reconnecting": string;
    "authorization-status.retry": string;
    "authorization-status.retrying": string;
    "authorization-status.title": string;
    "blend.invite.body-with-name": string;
    "blend.invite.body-without-name": string;
    "blend.invite.page-title": string;
    "blend.join.title": string;
    "block-user.dialog.block": string;
    "block-user.dialog.cancel": string;
    "block-user.dialog.description": string;
    "block-user.dialog.title": string;
    browse: string;
    browser_upgrade_notice: string;
    "buddy-feed.enable-share-listening-activity": string;
    "buddy-feed.friend-activity": string;
    "buddy-feed.let-followers-see-your-listening": string;
    "buddy-feed.see-what-your-friends-are-playing": string;
    "capping.upsell-title": string;
    "card.a11y.explicit": string;
    "card.tag.album": string;
    "card.tag.artist": string;
    "card.tag.audiobook": string;
    "card.tag.author": string;
    "card.tag.episode": string;
    "card.tag.genre": string;
    "card.tag.music-video": string;
    "card.tag.playlist": string;
    "card.tag.profile": string;
    "card.tag.show": string;
    "card.tag.track": string;
    "card.tag.video": string;
    "carousel.left": string;
    "carousel.right": string;
    "character-counter": string;
    "chart.new-entries": {
      one: string;
      other: string;
    };
    choose_photo: string;
    close: string;
    close_button_action: string;
    "collection.empty-page.episodes-subtitle": string;
    "collection.empty-page.episodes-title": string;
    "collection.empty-page.shows-cta": string;
    "collection.empty-page.songs-cta": string;
    "collection.empty-page.songs-subtitle": string;
    "collection.empty-page.songs-title": string;
    "collection.sort.creator": string;
    "collection.sort.recently-added": string;
    compilation: string;
    "concert.code_copied": string;
    "concert.door_time": string;
    "concert.entity_metadata.description_1": string;
    "concert.entity_metadata.description_2": string;
    "concert.entity_metadata.description_3": string;
    "concert.entity_metadata.description_4": string;
    "concert.entity_metadata.description_more": string;
    "concert.entity_metadata.title": string;
    "concert.entity_metadata.title_with_date_and_time": string;
    "concert.error.concert_not_found_title": string;
    "concert.error.no_locations_found_subtitle": string;
    "concert.feed.set_location": string;
    "concert.feed.set_location_button": string;
    "concert.feed.set_location_description": string;
    "concert.header.tickets_available_on": string;
    "concert.lineup": string;
    "concert.location.kilometers": string;
    "concert.location.radius.description": string;
    "concert.location.radius.header": string;
    "concert.location.radius.set": string;
    "concert.location.radius.title": string;
    "concert.location.radius.total": string;
    "concert.location.search.current_location": string;
    "concert.location.search.current_location.error": string;
    "concert.location.search.header": string;
    "concert.location.search.placeholder": string;
    "concert.location.search.recent": string;
    "concert.presale.code_description": string;
    "concert.presale.date_times": string;
    "concert.presale.no_codes": string;
    "concert.presale.title": string;
    "concert.see_more_events_in_location": string;
    "concert.show_time": string;
    "concert.similar_events": string;
    "concert.venue_dates": string;
    concert_buy_tickets: string;
    concert_event_ended: string;
    concert_find_tickets: string;
    concert_past_message: string;
    concerts: string;
    "concerts.browse_all_events": string;
    "concerts.cancelled": string;
    "concerts.claim_code": string;
    "concerts.count": {
      one: string;
      other: string;
    };
    "concerts.count_near_location": string;
    "concerts.default_location": string;
    "concerts.discover_near_you": string;
    "concerts.error.no_concerts_found_message": string;
    "concerts.error.no_concerts_found_title": string;
    "concerts.event.view": string;
    "concerts.fans_first.explanation": string;
    "concerts.fans_first.get_access": string;
    "concerts.fans_first.not_eligible": string;
    "concerts.fans_first.offer_ends": string;
    "concerts.fans_first.post_follow": string;
    "concerts.fans_first.thanks": string;
    "concerts.fans_first.title": string;
    "concerts.few_left": string;
    "concerts.find_more": string;
    "concerts.find_nearby": string;
    "concerts.flag_issue.cancel": string;
    "concerts.flag_issue.confirm": string;
    "concerts.flag_issue.event": string;
    "concerts.flag_issue.lineup": string;
    "concerts.flag_issue.soldout": string;
    "concerts.flag_issue.success_message": string;
    "concerts.flag_issue.title": string;
    "concerts.genre_all_events": string;
    "concerts.genre_all_events_near_you": string;
    "concerts.genre_for_you": string;
    "concerts.genres.all_genres": string;
    "concerts.genres.clear": string;
    "concerts.genres.genres": string;
    "concerts.genres.show_events": string;
    "concerts.genres.top_genres": string;
    "concerts.header.other": string;
    "concerts.load_more": string;
    "concerts.location.change": string;
    "concerts.location.change.button": string;
    "concerts.location.change.confirm": string;
    "concerts.location.change.error": string;
    "concerts.location.change.info": string;
    "concerts.location.preferred": string;
    "concerts.location.preferred.info": string;
    "concerts.near_location": string;
    "concerts.next_concert_near_location_colon": string;
    "concerts.no_codes_title": string;
    "concerts.no_events_description": string;
    "concerts.no_upcoming_events": string;
    "concerts.not_interested.error": string;
    "concerts.not_interested.reason.artist": string;
    "concerts.not_interested.reason.bought_tickets": string;
    "concerts.not_interested.reason.date": string;
    "concerts.not_interested.reason.location": string;
    "concerts.not_interested.reason.other": string;
    "concerts.not_interested.set.label": string;
    "concerts.not_interested.success.artist": string;
    "concerts.not_interested.success.concert": string;
    "concerts.not_interested.title": string;
    "concerts.not_interested.undo.artist": string;
    "concerts.not_interested.undo.artist.success": string;
    "concerts.not_interested.undo.concert": string;
    "concerts.not_interested.undo.concert.success": string;
    "concerts.not_interested.undo.error": string;
    "concerts.offer.price": string;
    "concerts.on_sale": string;
    "concerts.on_tour_colon": string;
    "concerts.presale": string;
    "concerts.save": string;
    "concerts.saved": string;
    "concerts.soldout": string;
    "concerts.ticket_price": string;
    "concerts.unsaved": string;
    "concerts.venues": string;
    "concerts.venues_description": string;
    "concerts.venues_for_you": string;
    "concerts.venues_other": string;
    "concerts.view_all_upcoming_concerts_count": string;
    "concerts_added-to-your-saved-events": string;
    concerts_browse_more: string;
    concerts_interested_tooltip: string;
    "concerts_near_you.multiple_locations": string;
    "concerts_near_you.playlist_disclaimer": string;
    concerts_on_tour: string;
    concerts_popular: string;
    concerts_recommended_for_you: string;
    "concerts_removed-from-your-saved-events": string;
    concerts_see_all_events: string;
    "connect-picker.connect-brand-title": string;
    "context-menu.about-recommendations": string;
    "context-menu.copy-album-link": string;
    "context-menu.copy-book-link": string;
    "context-menu.copy-concert-link": string;
    "context-menu.copy-episode-link": string;
    "context-menu.copy-generic-link": string;
    "context-menu.copy-show-link": string;
    "context-menu.copy-spotify-uri": string;
    "context-menu.copy-track-link": string;
    "context-menu.copy-venue-link": string;
    "context-menu.episode-page-link": string;
    "contextmenu.add-playlist-to-folder": string;
    "contextmenu.add-playlist-to-other-playlist": string;
    "contextmenu.add-recommendation-to-this-playlist": string;
    "contextmenu.add-to-another-playlist": string;
    "contextmenu.add-to-library": string;
    "contextmenu.add-to-playlist": string;
    "contextmenu.add-to-queue": string;
    "contextmenu.block": string;
    "contextmenu.buy-audiobook": string;
    "contextmenu.create-folder": string;
    "contextmenu.create-playlist": string;
    "contextmenu.delete": string;
    "contextmenu.download": string;
    "contextmenu.edit-details": string;
    "contextmenu.edit-profile": string;
    "contextmenu.exclude-from-recommendations": string;
    "contextmenu.find-folder": string;
    "contextmenu.find-playlist": string;
    "contextmenu.follow": string;
    "contextmenu.get-free-audiobook": string;
    "contextmenu.go-to-album": string;
    "contextmenu.go-to-artist": string;
    "contextmenu.go-to-artist-radio": string;
    "contextmenu.go-to-audiobook": string;
    "contextmenu.go-to-radio-dsa": string;
    "contextmenu.go-to-song-radio": string;
    "contextmenu.include-in-recommendations": string;
    "contextmenu.invite-collaborators": string;
    "contextmenu.leave-playlist": string;
    "contextmenu.looping-visuals-hide": string;
    "contextmenu.looping-visuals-hide.feedback": string;
    "contextmenu.looping-visuals-show": string;
    "contextmenu.looping-visuals-show.feedback": string;
    "contextmenu.make-collaborator": string;
    "contextmenu.make-listener": string;
    "contextmenu.make-playlist-private": string;
    "contextmenu.make-playlist-public": string;
    "contextmenu.make-public": string;
    "contextmenu.make-secret": string;
    "contextmenu.mark-as-finished": string;
    "contextmenu.mark-as-not-started": string;
    "contextmenu.move-playlist-to-folder": string;
    "contextmenu.open_desktop_app": string;
    "contextmenu.pin-album": string;
    "contextmenu.pin-artist": string;
    "contextmenu.pin-audiobook": string;
    "contextmenu.pin-author": string;
    "contextmenu.pin-dj": string;
    "contextmenu.pin-event": string;
    "contextmenu.pin-folder": string;
    "contextmenu.pin-playlist": string;
    "contextmenu.pin-prerelease-album": string;
    "contextmenu.pin-prerelease-audiobook": string;
    "contextmenu.pin-show": string;
    "contextmenu.remove-from-folders": string;
    "contextmenu.remove-from-library": string;
    "contextmenu.remove-from-playlist": string;
    "contextmenu.remove-from-queue": string;
    "contextmenu.remove-from-your-episodes": string;
    "contextmenu.remove-recommendation": string;
    "contextmenu.remove-user-from-playlist": string;
    "contextmenu.rename": string;
    "contextmenu.report": string;
    "contextmenu.save-to-your-episodes": string;
    "contextmenu.share": string;
    "contextmenu.share.copy-artist-link": string;
    "contextmenu.share.copy-author-link": string;
    "contextmenu.share.copy-playlist-link": string;
    "contextmenu.share.copy-profile-link": string;
    "contextmenu.show-credits": string;
    "contextmenu.unblock": string;
    "contextmenu.unfollow": string;
    "contextmenu.unlock-audiobook": string;
    "contextmenu.unpin-album": string;
    "contextmenu.unpin-artist": string;
    "contextmenu.unpin-audiobook": string;
    "contextmenu.unpin-author": string;
    "contextmenu.unpin-dj": string;
    "contextmenu.unpin-event": string;
    "contextmenu.unpin-folder": string;
    "contextmenu.unpin-playlist": string;
    "contextmenu.unpin-prerelease-album": string;
    "contextmenu.unpin-prerelease-audiobook": string;
    "contextmenu.unpin-show": string;
    cookies: string;
    "country-hubs.featured-charts-metadata-description": string;
    "country-hubs.featured-charts-metadata-title": string;
    "country-hubs.featured-charts-title": string;
    "country-hubs.hub-description": string;
    "country-hubs.hub-title": string;
    "country-hubs.popular-albums-metadata-description": string;
    "country-hubs.popular-albums-metadata-title": string;
    "country-hubs.popular-albums-title": string;
    "country-hubs.popular-artists-metadata-description": string;
    "country-hubs.popular-artists-metadata-title": string;
    "country-hubs.popular-artists-title": string;
    "country-hubs.trending-songs-metadata-description": string;
    "country-hubs.trending-songs-metadata-title": string;
    "country-hubs.trending-songs-title": string;
    "country.ad": string;
    "country.ae": string;
    "country.ag": string;
    "country.al": string;
    "country.am": string;
    "country.ao": string;
    "country.ar": string;
    "country.at": string;
    "country.au": string;
    "country.az": string;
    "country.ba": string;
    "country.bb": string;
    "country.bd": string;
    "country.be": string;
    "country.bf": string;
    "country.bg": string;
    "country.bh": string;
    "country.bi": string;
    "country.bj": string;
    "country.bn": string;
    "country.bo": string;
    "country.br": string;
    "country.bs": string;
    "country.bt": string;
    "country.bw": string;
    "country.by": string;
    "country.bz": string;
    "country.ca": string;
    "country.cd": string;
    "country.cg": string;
    "country.ch": string;
    "country.ci": string;
    "country.cl": string;
    "country.cm": string;
    "country.co": string;
    "country.cr": string;
    "country.cv": string;
    "country.cw": string;
    "country.cy": string;
    "country.cz": string;
    "country.de": string;
    "country.dj": string;
    "country.dk": string;
    "country.dm": string;
    "country.do": string;
    "country.dz": string;
    "country.ec": string;
    "country.ee": string;
    "country.eg": string;
    "country.es": string;
    "country.et": string;
    "country.fi": string;
    "country.fj": string;
    "country.fm": string;
    "country.fr": string;
    "country.ga": string;
    "country.gb": string;
    "country.gd": string;
    "country.ge": string;
    "country.gh": string;
    "country.gm": string;
    "country.gn": string;
    "country.gq": string;
    "country.gr": string;
    "country.gt": string;
    "country.gw": string;
    "country.gy": string;
    "country.hk": string;
    "country.hn": string;
    "country.hr": string;
    "country.ht": string;
    "country.hu": string;
    "country.id": string;
    "country.ie": string;
    "country.il": string;
    "country.in": string;
    "country.iq": string;
    "country.is": string;
    "country.it": string;
    "country.jm": string;
    "country.jo": string;
    "country.jp": string;
    "country.ke": string;
    "country.kg": string;
    "country.kh": string;
    "country.ki": string;
    "country.km": string;
    "country.kn": string;
    "country.kr": string;
    "country.kw": string;
    "country.kz": string;
    "country.la": string;
    "country.lb": string;
    "country.lc": string;
    "country.li": string;
    "country.lk": string;
    "country.lr": string;
    "country.ls": string;
    "country.lt": string;
    "country.lu": string;
    "country.lv": string;
    "country.ly": string;
    "country.ma": string;
    "country.mc": string;
    "country.md": string;
    "country.me": string;
    "country.mg": string;
    "country.mh": string;
    "country.mk": string;
    "country.ml": string;
    "country.mn": string;
    "country.mo": string;
    "country.mr": string;
    "country.mt": string;
    "country.mu": string;
    "country.mv": string;
    "country.mw": string;
    "country.mx": string;
    "country.my": string;
    "country.mz": string;
    "country.na": string;
    "country.ne": string;
    "country.ng": string;
    "country.ni": string;
    "country.nl": string;
    "country.no": string;
    "country.np": string;
    "country.nr": string;
    "country.nz": string;
    "country.om": string;
    "country.pa": string;
    "country.pe": string;
    "country.pg": string;
    "country.ph": string;
    "country.pk": string;
    "country.pl": string;
    "country.ps": string;
    "country.pt": string;
    "country.pw": string;
    "country.py": string;
    "country.qa": string;
    "country.ro": string;
    "country.rs": string;
    "country.rw": string;
    "country.sa": string;
    "country.sb": string;
    "country.sc": string;
    "country.se": string;
    "country.sg": string;
    "country.si": string;
    "country.sk": string;
    "country.sl": string;
    "country.sm": string;
    "country.sn": string;
    "country.sr": string;
    "country.st": string;
    "country.sv": string;
    "country.sz": string;
    "country.td": string;
    "country.tg": string;
    "country.th": string;
    "country.tj": string;
    "country.tl": string;
    "country.tn": string;
    "country.to": string;
    "country.tr": string;
    "country.tt": string;
    "country.tv": string;
    "country.tw": string;
    "country.tz": string;
    "country.ua": string;
    "country.ug": string;
    "country.us": string;
    "country.uy": string;
    "country.uz": string;
    "country.vc": string;
    "country.ve": string;
    "country.vn": string;
    "country.vu": string;
    "country.ws": string;
    "country.xk": string;
    "country.za": string;
    "country.zm": string;
    "country.zw": string;
    "date.today": string;
    "desktop-about.copy-version-info-tooltip": string;
    "desktop-about.platform": string;
    "desktop-about.platform-linux": string;
    "desktop-about.platform-mac-arm-64": string;
    "desktop-about.platform-mac-x86": string;
    "desktop-about.platform-unknown": string;
    "desktop-about.platform-win-arm-64": string;
    "desktop-about.platform-win-x86": string;
    "desktop-about.platform-win-x86-64": string;
    "desktop.login.Back": string;
    "desktop.settings.automatic-downgrade.info": string;
    "desktop.settings.automatic-downgrade.title": string;
    "desktop.settings.automixInfo": string;
    "desktop.settings.autoplay": string;
    "desktop.settings.autoplayInfo": string;
    "desktop.settings.autostart": string;
    "desktop.settings.autostartMinimized": string;
    "desktop.settings.autostartNormal": string;
    "desktop.settings.autostartOff": string;
    "desktop.settings.closeShouldMinimize": string;
    "desktop.settings.compatibility": string;
    "desktop.settings.crossfadeTracks": string;
    "desktop.settings.downloadQuality.info": string;
    "desktop.settings.downloadQuality.title": string;
    "desktop.settings.enableDeveloperMode": string;
    "desktop.settings.enableHardwareAcceleration": string;
    "desktop.settings.explicitContentFilter": string;
    "desktop.settings.explicitContentFilterSetting": string;
    "desktop.settings.explicitContentFilterSettingDetails1": string;
    "desktop.settings.explicitContentFilterSettingDetails2": string;
    "desktop.settings.explicitContentFilterSettingLocked": string;
    "desktop.settings.language": string;
    "desktop.settings.language-override": string;
    "desktop.settings.loudnessEnvironment_with_limiter_details": string;
    "desktop.settings.loudnessLoud": string;
    "desktop.settings.loudnessNormal": string;
    "desktop.settings.loudnessQuiet": string;
    "desktop.settings.monoDownmixer": string;
    "desktop.settings.musicQuality": string;
    "desktop.settings.newPlaylistsPublic": string;
    "desktop.settings.normalize": string;
    "desktop.settings.offlineStorageChangeLocation": string;
    "desktop.settings.offlineStorageLocation": string;
    "desktop.settings.otfn": string;
    "desktop.settings.playback": string;
    "desktop.settings.privateSession": string;
    "desktop.settings.privateSession.tooltip": string;
    "desktop.settings.proxy.autodetect": string;
    "desktop.settings.proxy.host": string;
    "desktop.settings.proxy.http": string;
    "desktop.settings.proxy.noproxy": string;
    "desktop.settings.proxy.pass": string;
    "desktop.settings.proxy.port": string;
    "desktop.settings.proxy.socks4": string;
    "desktop.settings.proxy.socks5": string;
    "desktop.settings.proxy.title": string;
    "desktop.settings.proxy.type": string;
    "desktop.settings.proxy.user": string;
    "desktop.settings.publishActivity": string;
    "desktop.settings.publishTopArtists": string;
    "desktop.settings.search": string;
    "desktop.settings.sec": string;
    "desktop.settings.selectLanguage": string;
    "desktop.settings.settings": string;
    "desktop.settings.showChromeToolbar": string;
    "desktop.settings.showFollows": string;
    "desktop.settings.showSystemMediaControls": string;
    "desktop.settings.social": string;
    "desktop.settings.startupAndWindowBehavior": string;
    "desktop.settings.storage": string;
    "desktop.settings.storage.cache.button": string;
    "desktop.settings.storage.cache.dialog.error": string;
    "desktop.settings.storage.cache.dialog.heading": string;
    "desktop.settings.storage.cache.dialog.text": string;
    "desktop.settings.storage.cache.heading": string;
    "desktop.settings.storage.cache.success": string;
    "desktop.settings.storage.cache.text": string;
    "desktop.settings.storage.cancel": string;
    "desktop.settings.storage.close": string;
    "desktop.settings.storage.downloads.button": string;
    "desktop.settings.storage.downloads.dialog.error": string;
    "desktop.settings.storage.downloads.dialog.heading": string;
    "desktop.settings.storage.downloads.dialog.text": string;
    "desktop.settings.storage.downloads.heading": string;
    "desktop.settings.storage.downloads.remove": string;
    "desktop.settings.storage.downloads.success": string;
    "desktop.settings.storage.downloads.text": string;
    "desktop.settings.storage.help": string;
    "desktop.settings.streamingQuality": string;
    "desktop.settings.streamingQualityAutomatic": string;
    "desktop.settings.streamingQualityHigh": string;
    "desktop.settings.streamingQualityLow": string;
    "desktop.settings.streamingQualityNormal": string;
    "desktop.settings.streamingQualityVeryHigh": string;
    "desktop.settings.updateDelayNotice": string;
    "download.available-offline": string;
    "download.cancel": string;
    "download.complete": string;
    "download.download": string;
    "download.downloading": string;
    "download.progress-global": string;
    "download.remove": string;
    "download.upsell": string;
    "drop_down.filter_by": string;
    "drop_down.sort_by": string;
    "duplicate.tracks.addAll": string;
    "duplicate.tracks.addAnyway": string;
    "duplicate.tracks.addNewOnes": string;
    "duplicate.tracks.allAlreadyAdded": string;
    "duplicate.tracks.alreadyAdded": string;
    "duplicate.tracks.dontAdd": string;
    "duplicate.tracks.oneAlreadyAdded": string;
    "duplicate.tracks.someAlreadyAdded": string;
    "duplicate.tracks.someAlreadyAddedDescription": string;
    edit_photo: string;
    ep: string;
    "episode.audiobook.chapter.finished": string;
    "episode.description-title": string;
    "episode.length": string;
    "episode.see_all_episodes": string;
    "equalizer.equalizer": string;
    "equalizer.filterA11yValueText": string;
    "equalizer.filterLabel": string;
    "equalizer.preset.acoustic": string;
    "equalizer.preset.bassBooster": string;
    "equalizer.preset.bassReducer": string;
    "equalizer.preset.classical": string;
    "equalizer.preset.dance": string;
    "equalizer.preset.deep": string;
    "equalizer.preset.electronic": string;
    "equalizer.preset.flat": string;
    "equalizer.preset.hiphop": string;
    "equalizer.preset.jazz": string;
    "equalizer.preset.latin": string;
    "equalizer.preset.loudness": string;
    "equalizer.preset.lounge": string;
    "equalizer.preset.manual": string;
    "equalizer.preset.piano": string;
    "equalizer.preset.pop": string;
    "equalizer.preset.rnb": string;
    "equalizer.preset.rock": string;
    "equalizer.preset.smallSpeakers": string;
    "equalizer.preset.spokenWord": string;
    "equalizer.preset.trebleBooster": string;
    "equalizer.preset.trebleReducer": string;
    "equalizer.preset.vocalBooster": string;
    "equalizer.presets": string;
    "equalizer.reset": string;
    "error-dialog.generic.body": string;
    "error-dialog.generic.header": string;
    "error-page.cta.cdmerror": string;
    "error-page.header.cdmerror": string;
    "error-page.header.expression_not_supported": string;
    "error-page.header.max_subscriptions_reached": string;
    "error-page.header.not_supported_for_device": string;
    "error-page.header.upcoming_releases_not_supported": string;
    "error-page.not-available-in-region.title": string;
    "error-page.not-found.home": string;
    "error-page.subtext.cdmerror": string;
    "error-page.subtext.max_subscriptions_reached": string;
    "error-page.subtext.upcoming_releases_not_supported": string;
    "error.generic": string;
    "error.not_found.body": string;
    "error.not_found.title.album": string;
    "error.not_found.title.page": string;
    "error.not_found.title.playlist": string;
    "error.not_found.title.podcast": string;
    "error.reload": string;
    "error.request-artist-appears-on": string;
    "error.request-artist-discography": string;
    "error.request-artist-failure": string;
    "error.request-artist-featuring": string;
    "error.request-artist-playlists": string;
    "error.request-artist-related-videos": string;
    "error.request-author-failure": string;
    "error.request-collection-music-downloads-failure": string;
    "error.request-collection-tracks-failure": string;
    "error.request-playlist-failure": string;
    "error.request-related-artists": string;
    "events_page.disclaimer": string;
    "events_page.timezone_hint": string;
    "ewg.color": string;
    "ewg.copied": string;
    "ewg.copy": string;
    "ewg.help": string;
    "ewg.help-text": string;
    "ewg.showcode": string;
    "ewg.size": string;
    "ewg.size.compact": string;
    "ewg.size.normal": string;
    "ewg.start-at": string;
    "ewg.terms": string;
    "ewg.title": string;
    "ewg.title.album": string;
    "ewg.title.artist": string;
    "ewg.title.audiobook": string;
    "ewg.title.episode": string;
    "ewg.title.playlist": string;
    "ewg.title.show": string;
    "ewg.title.track": string;
    "explicit-content.dialog.cancel": string;
    "explicit-content.dialog.confirm": string;
    "explicit-content.dialog.description": string;
    "explicit-content.dialog.title": string;
    "fatal-error.button-label": string;
    "fatal-error.header": string;
    "feedback.added-to-playlist-generic": string;
    "feedback.added-to-playlist-specific": string;
    "feedback.artist-banned-by-user": string;
    "feedback.artist-banned-by-user-banning-available": string;
    "feedback.artist-banned-by-user-undo": string;
    "feedback.ban-artist": string;
    "feedback.block-user": string;
    "feedback.cant-offline-sync-playlist-in-offline-mode": string;
    "feedback.cant-play-during-ads": string;
    "feedback.cant-play-track": string;
    "feedback.cant-skip-ads": string;
    "feedback.exclude-playlist-from-recommendations": string;
    "feedback.explicit-content-filtered": string;
    "feedback.hide-song": string;
    "feedback.include-playlist-in-recommendations": string;
    "feedback.left-playlist": string;
    "feedback.link-copied": string;
    "feedback.member-made-contributor": string;
    "feedback.member-made-listener": string;
    "feedback.play-after-ad": string;
    "feedback.playlist-made-private": string;
    "feedback.playlist-made-public": string;
    "feedback.playlist-publish": string;
    "feedback.playlist-unpublish": string;
    "feedback.removed-member": string;
    "feedback.skip-ads-after-delay": string;
    "feedback.skip-ads-to-hear-song": string;
    "feedback.track-banned-by-user": string;
    "feedback.track-exclusive-premium": string;
    "feedback.track-not-available": string;
    "feedback.track-not-available-forced-offline": string;
    "feedback.track-not-available-import": string;
    "feedback.track-not-available-in-region": string;
    "feedback.track-not-available-in-region-import": string;
    "feedback.unable-to-play": string;
    "feedback.unblock-user": string;
    "feedback.video-catalogue-restricted": string;
    "feedback.video-country-restricted": string;
    "feedback.video-georestricted": string;
    "feedback.video-playback-error": string;
    "feedback.video-playback-network-error": string;
    "feedback.video-unavailable": string;
    "feedback.video-unsupported-client-version": string;
    "feedback.video-unsupported-key-system": string;
    "feedback.video-unsupported-platform-version": string;
    filter: string;
    "folder.delete-header": string;
    follow: string;
    followers: string;
    following: string;
    "forbidden-page.description": string;
    "forbidden-page.title": string;
    "fta.bottom-bar.subtitle": string;
    "fta.sign-up-free": string;
    "fta.wall.start-listening": string;
    "fta.wall.start-watching": string;
    "gallery.next": string;
    "gallery.prev": string;
    "header.about-recommendations-and-promotions": string;
    "hifi.yes": string;
    "history.empty-description": string;
    "history.empty-title": string;
    "home.afternoon": string;
    "home.dsa-message": string;
    "home.dsa-message-link": string;
    "home.evening": string;
    "home.filters": string;
    "home.morning": string;
    "i18n.language-selection.subtitle": string;
    "i18n.language-selection.title": string;
    "i18n.meta.album.title": string;
    "i18n.meta.author.title.author-bibliography": string;
    "i18n.meta.author.title.author-overview": string;
    "i18n.meta.home.title": string;
    "i18n.meta.track-lyrics.title": string;
    "i18n.meta.track.title": string;
    "image-upload.legal-disclaimer": string;
    "internal-link-recommender.based-on-this-song": string;
    "internal-link-recommender.load-more-episodes": string;
    "internal-link-recommender.more-episodes-like-this": string;
    "internal-link-recommender.more-podcasts-like-this": string;
    "internal-link-recommender.more-recommended-releases": string;
    "internal-link-recommender.recommended-releases": string;
    "keyboard.shortcuts.description.charts": string;
    "keyboard.shortcuts.description.createNewFolder": string;
    "keyboard.shortcuts.description.currentlyPlaying": string;
    "keyboard.shortcuts.description.goBackwards": string;
    "keyboard.shortcuts.description.goForwards": string;
    "keyboard.shortcuts.description.goToPreferences": string;
    "keyboard.shortcuts.description.home": string;
    "keyboard.shortcuts.description.likeDislikeSong": string;
    "keyboard.shortcuts.description.likedSongs": string;
    "keyboard.shortcuts.description.lowerVolume": string;
    "keyboard.shortcuts.description.madeForYour": string;
    "keyboard.shortcuts.description.openContextMenu": string;
    "keyboard.shortcuts.description.openSearchModal": string;
    "keyboard.shortcuts.description.raiseVolume": string;
    "keyboard.shortcuts.description.repeat": string;
    "keyboard.shortcuts.description.search": string;
    "keyboard.shortcuts.description.seekBackward": string;
    "keyboard.shortcuts.description.seekForward": string;
    "keyboard.shortcuts.description.selectAll": string;
    "keyboard.shortcuts.description.shuffle": string;
    "keyboard.shortcuts.description.skipNext": string;
    "keyboard.shortcuts.description.skipPrev": string;
    "keyboard.shortcuts.description.togglePlay": string;
    "keyboard.shortcuts.description.yourAlbums": string;
    "keyboard.shortcuts.description.yourArtists": string;
    "keyboard.shortcuts.description.yourAudiobooks": string;
    "keyboard.shortcuts.description.yourPlaylists": string;
    "keyboard.shortcuts.description.yourPodcasts": string;
    "keyboard.shortcuts.help.heading": string;
    "keyboard.shortcuts.help.subheading.press": string;
    "keyboard.shortcuts.help.subheading.toToggle": string;
    "keyboard.shortcuts.layout.navigationBarDecreaseWidth": string;
    "keyboard.shortcuts.layout.navigationBarIncreaseWidth": string;
    "keyboard.shortcuts.layout.rightSidebarDecreaseWidth": string;
    "keyboard.shortcuts.layout.rightSidebarIncreaseWidth": string;
    "keyboard.shortcuts.layout.toggleLeftSidebar": string;
    "keyboard.shortcuts.layout.toggleRightSidebar": string;
    "keyboard.shortcuts.or": string;
    "keyboard.shortcuts.section.basic": string;
    "keyboard.shortcuts.section.layout": string;
    "keyboard.shortcuts.section.navigation": string;
    "keyboard.shortcuts.section.playback": string;
    "leave-playlist.dialog.cancel": string;
    "leave-playlist.dialog.leave": string;
    "leave-playlist.dialog.private-description": string;
    "leave-playlist.dialog.public-contributor-description": string;
    "leave-playlist.dialog.public-listener-description": string;
    "leave-playlist.dialog.title": string;
    "licenses.title": string;
    "live_events.all_events_tab": string;
    "live_events.date_picker_button_text": string;
    "live_events.date_picker_dialog_clear": string;
    "live_events.date_picker_dialog_done": string;
    "live_events.date_picker_dialog_title": string;
    "live_events.label": string;
    "live_events.location_concert_tickets": string;
    "live_events.next_weekend_preset": string;
    "live_events.this_weekend_preset": string;
    "live_events.venue_shelf_title": string;
    "local-files": string;
    "local-files.description": string;
    "local-files.empty-button": string;
    "local-files.empty-description": string;
    "local-files.empty-header": string;
    "local-files.source.downloads": string;
    "local-files.source.itunes": string;
    "local-files.source.my_music": string;
    "local-files.source.windows_music_library": string;
    "locale.af": string;
    "locale.am": string;
    "locale.ar": string;
    "locale.ar-EG": string;
    "locale.ar-MA": string;
    "locale.ar-SA": string;
    "locale.az": string;
    "locale.bg": string;
    "locale.bho": string;
    "locale.bn": string;
    "locale.bs": string;
    "locale.ca": string;
    "locale.cs": string;
    "locale.da": string;
    "locale.de": string;
    "locale.el": string;
    "locale.en": string;
    "locale.en-GB": string;
    "locale.es": string;
    "locale.es-419": string;
    "locale.es-AR": string;
    "locale.es-MX": string;
    "locale.et": string;
    "locale.eu": string;
    "locale.fa": string;
    "locale.fi": string;
    "locale.fil": string;
    "locale.fr": string;
    "locale.fr-CA": string;
    "locale.gl": string;
    "locale.gu": string;
    "locale.he": string;
    "locale.hi": string;
    "locale.hr": string;
    "locale.hu": string;
    "locale.id": string;
    "locale.is": string;
    "locale.it": string;
    "locale.ja": string;
    "locale.kn": string;
    "locale.ko": string;
    "locale.lt": string;
    "locale.lv": string;
    "locale.mk": string;
    "locale.ml": string;
    "locale.mr": string;
    "locale.ms": string;
    "locale.nb": string;
    "locale.ne": string;
    "locale.nl": string;
    "locale.or": string;
    "locale.pa-IN": string;
    "locale.pa-PK": string;
    "locale.pl": string;
    "locale.pt-BR": string;
    "locale.pt-PT": string;
    "locale.ro": string;
    "locale.ru": string;
    "locale.sk": string;
    "locale.sl": string;
    "locale.sr": string;
    "locale.sv": string;
    "locale.sw": string;
    "locale.ta": string;
    "locale.te": string;
    "locale.th": string;
    "locale.tr": string;
    "locale.uk": string;
    "locale.ur": string;
    "locale.vi": string;
    "locale.zh-CN": string;
    "locale.zh-HK": string;
    "locale.zh-TW": string;
    "locale.zu": string;
    login: string;
    "miniplayer.close": string;
    "miniplayer.open": string;
    "miniplayer.open-in": string;
    monthly_listeners: string;
    more: string;
    "more.label.context": string;
    "more.label.track": string;
    "music_and_talk.album_or_show": string;
    "music_and_talk.in_this_episode": string;
    music_downloads: string;
    music_videos: string;
    "mwp.cta.download.app": string;
    "mwp.cta.sign.up.free": string;
    "mwp.header.content.unavailable": string;
    "mwp.list.item.share": string;
    "mwp.podcast.all.episodes": string;
    "mwp.search.artists.all": string;
    "navbar.a11y.skip-navigation": string;
    "navbar.go-back": string;
    "navbar.go-forward": string;
    "navbar.install-app": string;
    "navbar.premium": string;
    "navbar.search": string;
    new_releases: string;
    "npb.collapseCoverArt": string;
    "npb.expandCoverArt": string;
    "npv.full-screen": string;
    "npv.related-videos.title": string;
    "npv.song-videos.switch-to-audio": string;
    "npv.song-videos.switch-to-video": string;
    "offline-error.device-limit-reached.header": string;
    "offline-error.device-limit-reached.message": string;
    "offline.badge": string;
    "offline.callout-disconnected": string;
    "offline.feedback-text": string;
    only_visible_to_you: string;
    "page.generic-title": string;
    "page.loading": string;
    paid: string;
    pause: string;
    "paywalls.modal-body-p1": string;
    "paywalls.modal-body-p2": string;
    "paywalls.modal-body-p3": string;
    "paywalls.modal-heading": string;
    "permissions.collaborator": string;
    "permissions.creator": string;
    "permissions.current-user-name": string;
    "permissions.invite-collaborators": string;
    "permissions.listener": string;
    "permissions.modal-label": string;
    "permissions.private-playlist": string;
    "permissions.public-playlist": string;
    "permissions.shared-with": string;
    "permissions.songs-added": {
      one: string;
      other: string;
    };
    play: string;
    "playback-control.a11y.landmark-label": string;
    "playback-control.a11y.lightsaber-hilt-button": string;
    "playback-control.a11y.now-playing-bar-landmark-label": string;
    "playback-control.a11y.seek-slider-button": string;
    "playback-control.a11y.volume-high": string;
    "playback-control.a11y.volume-low": string;
    "playback-control.a11y.volume-medium": string;
    "playback-control.a11y.volume-off": string;
    "playback-control.a11y.volume-slider-button": string;
    "playback-control.ban": string;
    "playback-control.change-playback-speed": string;
    "playback-control.connect-picker": string;
    "playback-control.decrease-playback-speed": string;
    "playback-control.disable-repeat": string;
    "playback-control.disable-shuffle": string;
    "playback-control.enable-repeat": string;
    "playback-control.enable-repeat-one": string;
    "playback-control.enable-shuffle": string;
    "playback-control.increase-playback-speed": string;
    "playback-control.mute": string;
    "playback-control.now-playing-label": string;
    "playback-control.pause": string;
    "playback-control.play": string;
    "playback-control.playback-speed": string;
    "playback-control.playback-speed-button-a11y": string;
    "playback-control.queue": string;
    "playback-control.skip-back": string;
    "playback-control.skip-backward-15": string;
    "playback-control.skip-forward": string;
    "playback-control.skip-forward-15": string;
    "playback-control.un-ban": string;
    "playback-control.unmute": string;
    "playback-info.dsa-promotional-content": string;
    playing: string;
    playlist: string;
    "playlist.a11y.pause": string;
    "playlist.a11y.play": string;
    "playlist.curation.albums": string;
    "playlist.curation.find_more": string;
    "playlist.curation.find_more-a11y.label": string;
    "playlist.curation.popular_songs": string;
    "playlist.curation.search_placeholder": string;
    "playlist.curation.search_placeholder-booklists": string;
    "playlist.curation.see_all_album": string;
    "playlist.curation.see_all_artists": string;
    "playlist.curation.see_all_songs": string;
    "playlist.curation.title": string;
    "playlist.default_folder_name": string;
    "playlist.default_playlist_name": string;
    "playlist.delete": string;
    "playlist.delete-cancel": string;
    "playlist.delete-description": string;
    "playlist.delete-title": string;
    "playlist.edit-details.button": string;
    "playlist.edit-details.change-photo": string;
    "playlist.edit-details.description-label": string;
    "playlist.edit-details.description-placeholder": string;
    "playlist.edit-details.error.description-breaks": string;
    "playlist.edit-details.error.failed-to-save": string;
    "playlist.edit-details.error.file-size-exceeded": string;
    "playlist.edit-details.error.file-upload-failed": string;
    "playlist.edit-details.error.image-type-not-supported": string;
    "playlist.edit-details.error.invalid-html": string;
    "playlist.edit-details.error.missing-name": string;
    "playlist.edit-details.error.no-internet": string;
    "playlist.edit-details.error.too-big": string;
    "playlist.edit-details.error.too-small": string;
    "playlist.edit-details.error.unsaved-changes": string;
    "playlist.edit-details.name-label": string;
    "playlist.edit-details.name-placeholder": string;
    "playlist.edit-details.remove-photo": string;
    "playlist.edit-details.title": string;
    "playlist.extender.button.add": string;
    "playlist.extender.empty.playlist": string;
    "playlist.extender.recommended.header": string;
    "playlist.extender.recommended.title": string;
    "playlist.extender.refresh": string;
    "playlist.extender.songs.in.playlist": string;
    "playlist.header.creator-and-co-creator": string;
    "playlist.header.creator-and-others": string;
    "playlist.header.made-for": string;
    "playlist.new-default-name": string;
    "playlist.new-header": string;
    "playlist.page-title": string;
    "playlist.presented_by": string;
    "playlist.remove_from_playlist": string;
    "playlist.remove_multiple_description": string;
    "playlist.search_in_playlist": string;
    "playlist.similar-playlist": string;
    "podcast-ads.recent_ads": string;
    "podcast-ads.recent_ads_from": string;
    "podcast-ads.recent_ads_just_two": string;
    "podcast-ads.recent_ads_more_than_two": string;
    "podcast-ads.show_more_indicator": string;
    "podcasts.subscriber-indicator.otp": string;
    "podcasts.subscriber-indicator.subscription": string;
    "premium.dialog.description": {
      one: string;
      other: string;
    };
    "premium.dialog.disclaimer": string;
    "premium.dialog.disclaimer.noprice": string;
    "premium.dialog.subscribe": string;
    "premium.dialog.title": string;
    preview: string;
    "preview.album": string;
    "preview.continue-playing": string;
    "preview.episode": string;
    "preview.playlist": string;
    "preview.remaining-time": string;
    "private-session.badge": string;
    private_playlist: string;
    "promotions.context-menu.not-interested": string;
    "promotions.default-section-title": string;
    "pta.bottom-bar.title": string;
    public_playlist: string;
    public_playlists: string;
    "pwa.confirm": string;
    "pwa.download-app": string;
    "queue.added-to-queue": string;
    "queue.cancel-button": string;
    "queue.clear-queue": string;
    "queue.confirm-button": string;
    "queue.confirm-message": string;
    "queue.confirm-title": {
      one: string;
      other: string;
    };
    "queue.empty-description": string;
    "queue.empty-title": string;
    "queue.fine-something": string;
    "queue.next-from": string;
    "queue.next-in-queue": string;
    "queue.next-up": string;
    "queue.now-playing": string;
    "queue.queued-by": string;
    "queue.removed-from-queue": string;
    recently_played_artists: string;
    "release-notifier.update-available": string;
    "release-notifier.update-processing": string;
    "release-notifier.update-ready": string;
    remove: string;
    remove_from_your_library: string;
    remove_from_your_liked_songs: string;
    "resize.sidebar": string;
    "rich-page.fans-also-like": string;
    "rich-page.popular-albums-by-artist": string;
    "rich-page.popular-releases-by-artist": string;
    "rich-page.popular-singles-and-eps-by-artist": string;
    "rich-page.popular-tracks": string;
    save: string;
    save_to_your_library: string;
    save_to_your_liked_songs: string;
    saves: {
      one: string;
      other: string;
    };
    "search.a11y.clear-input": string;
    "search.a11y.songs-search-results": string;
    "search.clear-recent-searches": string;
    "search.clear-recent-searches-dialog.cancel-button": string;
    "search.clear-recent-searches-dialog.confirm-button": string;
    "search.clear-recent-searches-dialog.description": string;
    "search.clear-recent-searches-dialog.title": string;
    "search.concert.event": string;
    "search.concerts.see-all": string;
    "search.empty-results-text": string;
    "search.empty-results-text-short": string;
    "search.empty-results-title": string;
    "search.empty-results-title-for-chip": string;
    "search.lyrics-match": string;
    "search.page-title": string;
    "search.playlist-by": string;
    "search.row.top-results": string;
    "search.search-for-label": string;
    "search.see-all": string;
    "search.showing-category-query-songs": string;
    "search.title.albums": string;
    "search.title.all": string;
    "search.title.artists": string;
    "search.title.audiobooks": string;
    "search.title.authors": string;
    "search.title.concerts": string;
    "search.title.episodes": string;
    "search.title.genres-and-moods": string;
    "search.title.playlists": string;
    "search.title.podcast-and-shows": string;
    "search.title.profiles": string;
    "search.title.recent-searches": string;
    "search.title.shows": string;
    "search.title.top-result": string;
    "search.title.top-results": string;
    "search.title.tracks": string;
    "settings.addASource": string;
    "settings.canvasVideos": string;
    "settings.display": string;
    "settings.employee": string;
    "settings.library": string;
    "settings.library.compactMode": string;
    "settings.localFilesFolderAdded": string;
    "settings.npv": string;
    "settings.restartApp": string;
    "settings.showLocalFiles": string;
    "settings.showMusicAnnouncements": string;
    "settings.showSongsFrom": string;
    "settings.showTrackNotifications": string;
    "shared.ReloadBanner.button-reload-now": string;
    "shared.ReloadBanner.text": string;
    "shared.ReloadBanner.text-days": {
      one: string;
      other: string;
    };
    "shared.ReloadBanner.text-hours": {
      one: string;
      other: string;
    };
    "shared.ReloadBanner.text-soon": string;
    "shared.audiobook-capping.offline-capping-explanation.body": string;
    "shared.audiobook-capping.offline-capping-explanation.cta": string;
    "shared.audiobook-capping.offline-capping-explanation.title": string;
    "shared.library.entity-row.liked-songs.title": string;
    "shared.library.entity-row.local-files.title": string;
    "shared.library.entity-row.your-episodes.title": string;
    "shared.library.filter.album": string;
    "shared.library.filter.artist": string;
    "shared.library.filter.author": string;
    "shared.library.filter.book": string;
    "shared.library.filter.by-spotify": string;
    "shared.library.filter.by-you": string;
    "shared.library.filter.downloaded": string;
    "shared.library.filter.events": string;
    "shared.library.filter.in-progress": string;
    "shared.library.filter.playlist": string;
    "shared.library.filter.podcasts-courses": string;
    "shared.library.filter.unplayed": string;
    "shared.library.sort-by.author": string;
    "shared.library.sort-by.creator": string;
    "shared.library.sort-by.custom": string;
    "shared.library.sort-by.date": string;
    "shared.library.sort-by.name": string;
    "shared.library.sort-by.recently-added": string;
    "shared.library.sort-by.recently-played-or-added": string;
    "shared.library.sort-by.recently-updated": string;
    "shared.library.sort-by.relevance": string;
    "shelf.see-all": string;
    show_less: string;
    show_more: string;
    "shows.filter.in-progress": string;
    "shows.filter.unplayed": string;
    "shows.sort.newest-to-oldest": string;
    "shows.sort.oldest-to-newest": string;
    "sidebar.a11y.landmark-label": string;
    "sidebar.liked_songs": string;
    "sidebar.your_episodes": string;
    sign_up: string;
    "similar-audiobooks.load-more-chapters": string;
    "similar-audiobooks.more-audiobooks-like-this": string;
    "singalong.button": string;
    "singalong.less-vocal": string;
    "singalong.more-vocal": string;
    "singalong.off": string;
    "singalong.title": string;
    single: string;
    song: string;
    "sort.added-by": string;
    "sort.album": string;
    "sort.album-or-podcast": string;
    "sort.artist": string;
    "sort.custom-order": string;
    "sort.date-added": string;
    "sort.duration": string;
    "sort.title": string;
    "spotify-connect": string;
    "subtitles-picker.autogenerated": string;
    "subtitles-picker.heading": string;
    "subtitles-picker.option_cs": string;
    "subtitles-picker.option_de": string;
    "subtitles-picker.option_el": string;
    "subtitles-picker.option_en": string;
    "subtitles-picker.option_es": string;
    "subtitles-picker.option_fi": string;
    "subtitles-picker.option_fr": string;
    "subtitles-picker.option_hu": string;
    "subtitles-picker.option_id": string;
    "subtitles-picker.option_it": string;
    "subtitles-picker.option_ja": string;
    "subtitles-picker.option_ms": string;
    "subtitles-picker.option_nl": string;
    "subtitles-picker.option_off": string;
    "subtitles-picker.option_pl": string;
    "subtitles-picker.option_pt": string;
    "subtitles-picker.option_sv": string;
    "subtitles-picker.option_tr": string;
    "subtitles-picker.option_vi": string;
    "subtitles-picker.option_zh": string;
    "time.days.short": {
      one: string;
      other: string;
    };
    "time.estimated": string;
    "time.hours.short": {
      one: string;
      other: string;
    };
    "time.left": string;
    "time.left-of": string;
    "time.minutes.short": {
      one: string;
      other: string;
    };
    "time.now": string;
    "time.over": string;
    "time.seconds.short": {
      one: string;
      other: string;
    };
    "time.weeks.short": {
      one: string;
      other: string;
    };
    "topBar.dsa-cta": string;
    "topBar.dsa-indicator": string;
    "topBar.label": string;
    top_artists_this_month: string;
    top_tracks_this_month: string;
    "track-credits.accordion": string;
    "track-credits.acoustic-guitar": string;
    "track-credits.additional-credits": string;
    "track-credits.additional-engineer": string;
    "track-credits.additional-keyboards": string;
    "track-credits.additional-mixer": string;
    "track-credits.additional-percussion": string;
    "track-credits.additional-producer": string;
    "track-credits.additional-production": string;
    "track-credits.additional-programmer": string;
    "track-credits.additional-recording": string;
    "track-credits.additional-vocals": string;
    "track-credits.all-instruments": string;
    "track-credits.ambient-sounds": string;
    "track-credits.arranger": string;
    "track-credits.artist": string;
    "track-credits.assistant-engineer": string;
    "track-credits.assistant-mix-engineer": string;
    "track-credits.assistant-mixer": string;
    "track-credits.assistant-mixing-engineer": string;
    "track-credits.assistant-producer": string;
    "track-credits.assistant-recording-engineer": string;
    "track-credits.assistant-remix-engineer": string;
    "track-credits.associated-performer": string;
    "track-credits.audio-additional-mix-engineer": string;
    "track-credits.audio-recording-engineer": string;
    "track-credits.background-vocal": string;
    "track-credits.background-vocalist": string;
    "track-credits.background-vocals": string;
    "track-credits.backing-vocals": string;
    "track-credits.bass": string;
    "track-credits.bass-guitar": string;
    "track-credits.bells": string;
    "track-credits.brass-band": string;
    "track-credits.cajon": string;
    "track-credits.cello": string;
    "track-credits.chamber-ensemble": string;
    "track-credits.clapping": string;
    "track-credits.co-mixer": string;
    "track-credits.co-producer": string;
    "track-credits.co-writer": string;
    "track-credits.composer": string;
    "track-credits.composer-and-lyricist": string;
    "track-credits.conga": string;
    "track-credits.cymbals": string;
    "track-credits.designer": string;
    "track-credits.digital-editor": string;
    "track-credits.dobro": string;
    "track-credits.double-bass": string;
    "track-credits.drum-programmer": string;
    "track-credits.drum-programming": string;
    "track-credits.drums": string;
    "track-credits.editor": string;
    "track-credits.electric-bass": string;
    "track-credits.electric-guitar": string;
    "track-credits.engineer": string;
    "track-credits.engineer-and-mixer": string;
    "track-credits.executive-producer": string;
    "track-credits.featured-artist": string;
    "track-credits.featuring": string;
    "track-credits.fiddle": string;
    "track-credits.flugelhorn": string;
    "track-credits.flute": string;
    "track-credits.guitar": string;
    "track-credits.harp": string;
    "track-credits.horn": string;
    "track-credits.horn-arranger": string;
    "track-credits.income-participant": string;
    "track-credits.instruments": string;
    "track-credits.keyboards": string;
    "track-credits.keyboards-arrangements": string;
    "track-credits.label": string;
    "track-credits.lyricist": string;
    "track-credits.main-artist": string;
    "track-credits.mandolin": string;
    "track-credits.masterer": string;
    "track-credits.mastering-engineer": string;
    "track-credits.mellotron": string;
    "track-credits.miscellaneous-production": string;
    "track-credits.mix-engineer": string;
    "track-credits.mixer": string;
    "track-credits.mixing-engineer": string;
    "track-credits.mixing-engineers": string;
    "track-credits.music-production": string;
    "track-credits.music-publisher": string;
    "track-credits.orchestra": string;
    "track-credits.organ": string;
    "track-credits.pedal-steel": string;
    "track-credits.percussion": string;
    "track-credits.performers": string;
    "track-credits.piano": string;
    "track-credits.pro-tools": string;
    "track-credits.pro-tools-editing": string;
    "track-credits.producer": string;
    "track-credits.producers": string;
    "track-credits.production": string;
    "track-credits.programmed-and-arranged-by": string;
    "track-credits.programmer": string;
    "track-credits.programming": string;
    "track-credits.programming-and-keyboards": string;
    "track-credits.re-mixer": string;
    "track-credits.recorded-by": string;
    "track-credits.recorder": string;
    "track-credits.recording": string;
    "track-credits.recording-and-mixing": string;
    "track-credits.recording-arranger": string;
    "track-credits.recording-engineer": string;
    "track-credits.recording-producer": string;
    "track-credits.report-error": string;
    "track-credits.rhythm-guitar": string;
    "track-credits.samples": string;
    "track-credits.saxophone": string;
    "track-credits.second-engineer": string;
    "track-credits.sitar": string;
    "track-credits.songwriter": string;
    "track-credits.sound-effects": string;
    "track-credits.sound-engineer": string;
    "track-credits.source": string;
    "track-credits.steel-guitar": string;
    "track-credits.strings": string;
    "track-credits.studio-musician": string;
    "track-credits.synthesizer": string;
    "track-credits.tape-realization": string;
    "track-credits.trumpet": string;
    "track-credits.upright-bass": string;
    "track-credits.vibraphone": string;
    "track-credits.viola": string;
    "track-credits.violin": string;
    "track-credits.vocal": string;
    "track-credits.vocal-arranger": string;
    "track-credits.vocal-engineer": string;
    "track-credits.vocal-ensemble": string;
    "track-credits.vocal-producer": string;
    "track-credits.vocals": string;
    "track-credits.voice-performer": string;
    "track-credits.work-arranger": string;
    "track-credits.writer": string;
    "track-credits.writers": string;
    "track-page.error": string;
    "track-page.from-the-album": string;
    "track-page.from-the-compilation": string;
    "track-page.from-the-ep": string;
    "track-page.from-the-single": string;
    "track-page.playlists-with-this-song": string;
    "track-page.sign-in-to-view-lyrics": string;
    "track-trailer": string;
    "tracklist-header.audiobooks-counter": {
      one: string;
      other: string;
    };
    "tracklist-header.episodes-counter": {
      one: string;
      other: string;
    };
    "tracklist-header.items-counter": {
      one: string;
      other: string;
    };
    "tracklist-header.songs-counter": {
      one: string;
      other: string;
    };
    "tracklist.a11y.pause": string;
    "tracklist.a11y.play": string;
    "tracklist.disc-sperator.title": string;
    "tracklist.drag.multiple.label": {
      one: string;
      other: string;
    };
    "tracklist.header.actions": string;
    "tracklist.header.added-by": string;
    "tracklist.header.album": string;
    "tracklist.header.album-or-podcast": string;
    "tracklist.header.columns": string;
    "tracklist.header.columns-menu.label": string;
    "tracklist.header.date-added": string;
    "tracklist.header.duration": string;
    "tracklist.header.event": string;
    "tracklist.header.plays": string;
    "tracklist.header.release-date": string;
    "tracklist.header.title": string;
    "tracklist.header.venue": string;
    "tracklist.livestream": string;
    "tracklist.popular-tracks": string;
    "type.newEpisode": string;
    "type.newPodcastEpisode": string;
    "type.podcast": string;
    "type.podcastEpisode": string;
    "type.show": string;
    "type.showEpisode": string;
    unfollow: string;
    "upgrade.button": string;
    "upgrade.tooltip.title": string;
    "user-fraud-verification.confirm-dialog.cancel": string;
    "user-fraud-verification.confirm-dialog.confirm": string;
    "user-fraud-verification.confirm-dialog.description": string;
    "user-fraud-verification.confirm-dialog.label": string;
    "user-fraud-verification.confirm-dialog.title": string;
    "user-fraud-verification.dialog-alert.describe": string;
    "user-fraud-verification.dialog-alert.ok": string;
    "user-fraud-verification.dialog-alert.title": string;
    "user-fraud-verification.snackbar.message": string;
    "user.account": string;
    "user.edit-details.choose-photo": string;
    "user.edit-details.error.failed-to-save": string;
    "user.edit-details.error.file-size-exceeded": string;
    "user.edit-details.error.file-upload-failed": string;
    "user.edit-details.error.image-type-not-supported": string;
    "user.edit-details.error.missing-name": string;
    "user.edit-details.error.too-big": string;
    "user.edit-details.error.too-small": string;
    "user.edit-details.name-label": string;
    "user.edit-details.name-placeholder": string;
    "user.edit-details.remove-photo": string;
    "user.edit-details.title": string;
    "user.followers": {
      one: string;
      other: string;
    };
    "user.following": {
      one: string;
      other: string;
    };
    "user.log-out": string;
    "user.private-session": string;
    "user.public-playlists": {
      one: string;
      other: string;
    };
    "user.settings": string;
    "user.setup-duo": string;
    "user.setup-family": string;
    "user.support": string;
    "user.they_follow_us": string;
    "user.unable-to-update": string;
    "user.update-available": string;
    "user.update-client": string;
    "video-not-supported.modal.cancel": string;
    "video-not-supported.modal.confirm": string;
    "video-not-supported.modal.title": string;
    "video-player.default-view": string;
    "view.recently-played": string;
    "view.see-all": string;
    "view.web-player-home": string;
    "web-player.age-assurance.verify-age-action.title": string;
    "web-player.album.anniversary": {
      one: string;
      other: string;
    };
    "web-player.album.open_coverart_modal": string;
    "web-player.album.premium-only-banner-album": string;
    "web-player.album.premium-only-banner-compilation": string;
    "web-player.album.premium-only-banner-ep": string;
    "web-player.album.premium-only-banner-single": string;
    "web-player.album.release": string;
    "web-player.aligned-curation.add-to-playlist-menu": string;
    "web-player.aligned-curation.button.cancel": string;
    "web-player.aligned-curation.button.done": string;
    "web-player.aligned-curation.button.new-playlist": string;
    "web-player.aligned-curation.contextmenu.new-playlist": string;
    "web-player.aligned-curation.feedback.added": string;
    "web-player.aligned-curation.feedback.added-to-library": string;
    "web-player.aligned-curation.feedback.change-button": string;
    "web-player.aligned-curation.feedback.changes-saved": string;
    "web-player.aligned-curation.feedback.removed": string;
    "web-player.aligned-curation.feedback.removed-from-library": string;
    "web-player.aligned-curation.saved-in.title": string;
    "web-player.aligned-curation.search-placeholder": string;
    "web-player.aligned-curation.title": string;
    "web-player.aligned-curation.tooltips.add-to-liked-songs": string;
    "web-player.aligned-curation.tooltips.add-to-playlist": string;
    "web-player.aligned-curation.tooltips.add-to-your-episodes": string;
    "web-player.aligned-curation.tooltips.add-to-your-library": string;
    "web-player.aligned-curation.tooltips.remove-from-liked-songs": string;
    "web-player.artist.discography.sort-box.sort-by": string;
    "web-player.artist.discography.sort-box.sort-name": string;
    "web-player.artist.discography.sort-box.sort-release": string;
    "web-player.artist.discography.sort-box.view-as": string;
    "web-player.artist.discography.sort-box.view-grid": string;
    "web-player.artist.discography.sort-box.view-list": string;
    "web-player.artist.upcoming-release": string;
    "web-player.artist.upcoming-release.album": string;
    "web-player.artist.upcoming-release.ep": string;
    "web-player.artist.upcoming-release.single": string;
    "web-player.audiobooks.audiobook": string;
    "web-player.audiobooks.buy": string;
    "web-player.audiobooks.buyFree": string;
    "web-player.audiobooks.goToAudiobook": string;
    "web-player.audiobooks.narratedByX": string;
    "web-player.audiobooks.noRating": string;
    "web-player.audiobooks.open_cover_modal": string;
    "web-player.audiobooks.rating.closeModal": string;
    "web-player.audiobooks.rating.listenFirstDescription": string;
    "web-player.audiobooks.rating.listenFirstTitle": string;
    "web-player.audiobooks.rating.ok": string;
    "web-player.audiobooks.rating.rateAudiobook": string;
    "web-player.audiobooks.rating.rateThisAudiobook": string;
    "web-player.audiobooks.rating.ratingButton": string;
    "web-player.audiobooks.rating.ratingButtonRatings": {
      one: string;
      other: string;
    };
    "web-player.audiobooks.rating.ratingButtonStars": {
      one: string;
      other: string;
    };
    "web-player.audiobooks.rating.starAriaLabel": {
      one: string;
      other: string;
    };
    "web-player.audiobooks.retailPrice": string;
    "web-player.audiobooks.unlock": string;
    "web-player.author.about": string;
    "web-player.author.author": string;
    "web-player.blend.duo-invite.description": string;
    "web-player.blend.group-invite.header": string;
    "web-player.blend.group-invite.warning": string;
    "web-player.blend.invite.button-title": string;
    "web-player.blend.invite.page-title": string;
    "web-player.cinema-mode.artwork-mode": string;
    "web-player.cinema-mode.canvas-mode": string;
    "web-player.cinema-mode.fullscreen.enter": string;
    "web-player.cinema-mode.fullscreen.exit": string;
    "web-player.cinema-mode.fullscreen.media-control-options": string;
    "web-player.cinema-mode.hero-mode": string;
    "web-player.cinema-mode.minimize": string;
    "web-player.cinema-mode.peek.show.now-playing-view": string;
    "web-player.clear-filter": string;
    "web-player.connect.bar.connected-state": string;
    "web-player.connect.bar.connecting-state": string;
    "web-player.connect.context-menu.incarnation-cast": string;
    "web-player.connect.context-menu.incarnation-connect": string;
    "web-player.connect.context-menu.incarnation-title": string;
    "web-player.connect.context-menu.log-out-of-device": string;
    "web-player.connect.device-picker.ad-playing": string;
    "web-player.connect.device-picker.auto-invite-jam-toggle": string;
    "web-player.connect.device-picker.check-wifi": string;
    "web-player.connect.device-picker.check-wifi-subtitle": string;
    "web-player.connect.device-picker.connect-hub-external-link": string;
    "web-player.connect.device-picker.connect-to-device": string;
    "web-player.connect.device-picker.current-device": string;
    "web-player.connect.device-picker.device-unavailable": string;
    "web-player.connect.device-picker.from-this-computer": string;
    "web-player.connect.device-picker.from-this-web-browser": string;
    "web-player.connect.device-picker.get-premium": string;
    "web-player.connect.device-picker.google-cast": string;
    "web-player.connect.device-picker.google-cast-devices": string;
    "web-player.connect.device-picker.help-external-link": string;
    "web-player.connect.device-picker.install-spotify": string;
    "web-player.connect.device-picker.no-devices-found": string;
    "web-player.connect.device-picker.no-devices-local-network": string;
    "web-player.connect.device-picker.on-other-networks": string;
    "web-player.connect.device-picker.on-this-network": string;
    "web-player.connect.device-picker.play-from-another": string;
    "web-player.connect.device-picker.play-from-another-subtitle": string;
    "web-player.connect.device-picker.playstation-unauthorized": string;
    "web-player.connect.device-picker.restart-device": string;
    "web-player.connect.device-picker.restart-speaker": string;
    "web-player.connect.device-picker.restart-speaker-subtitle": string;
    "web-player.connect.device-picker.restricted-device-default-body": string;
    "web-player.connect.device-picker.restricted-device-default-title": string;
    "web-player.connect.device-picker.restrictions-modal-ok-button": string;
    "web-player.connect.device-picker.select-another-device": string;
    "web-player.connect.device-picker.start-jam": string;
    "web-player.connect.device-picker.start-jam-description": string;
    "web-player.connect.device-picker.switch-to-app": string;
    "web-player.connect.device-picker.switch-to-app-subtitle": string;
    "web-player.connect.device-picker.this-computer": string;
    "web-player.connect.device-picker.this-web-browser": string;
    "web-player.connect.device-picker.tts-playing": string;
    "web-player.connect.device-picker.unsupported-uri": string;
    "web-player.connect.device-picker.update-device": string;
    "web-player.connect.device-picker.wakeup-timeout": string;
    "web-player.connect.device-picker.wakingup-device": string;
    "web-player.connect.nudge.dj-voice-unavailable": string;
    "web-player.connect.nudge.listen-to-speaker": string;
    "web-player.cover-art-modal.close": string;
    "web-player.cultural-moments.unsupported.appleAppStoreAlt": string;
    "web-player.cultural-moments.unsupported.googlePlayStoreAlt": string;
    "web-player.deeplink-intent.add-to-library.already-in-library": string;
    "web-player.deeplink-intent.add-to-library.artist-description": string;
    "web-player.deeplink-intent.add-to-library.description": string;
    "web-player.deeplink-intent.add-to-library.episodes-title": string;
    "web-player.deeplink-intent.add-to-library.liked-songs-title": string;
    "web-player.deeplink-intent.add-to-library.title": string;
    "web-player.download-page.direct-download": string;
    "web-player.download-page.download-button": string;
    "web-player.download-page.notification-retry": string;
    "web-player.download-page.notification-text": string;
    "web-player.download-page.other-platforms-current": string;
    "web-player.download-page.other-platforms-device-name": string;
    "web-player.download-page.upsell-popover.close": string;
    "web-player.download-page.upsell-popover.description-buddy-feed": string;
    "web-player.download-page.upsell-popover.description-download": string;
    "web-player.download-page.upsell-popover.description-equalizer": string;
    "web-player.download-page.upsell-popover.description-jam": string;
    "web-player.download-page.upsell-popover.description-normalize-quality": string;
    "web-player.download-page.upsell-popover.description-publish-activity": string;
    "web-player.download-page.upsell-popover.description-streaming-quality": string;
    "web-player.download-page.upsell-popover.title-buddy-feed": string;
    "web-player.download-page.upsell-popover.title-download": string;
    "web-player.download-page.upsell-popover.title-equalizer": string;
    "web-player.download-page.upsell-popover.title-jam": string;
    "web-player.download-page.upsell-popover.title-normalize-quality": string;
    "web-player.download-page.upsell-popover.title-publish-activity": string;
    "web-player.download-page.upsell-popover.title-streaming-quality": string;
    "web-player.download-page.windows-store": string;
    "web-player.download.remove-download-confirmation-dialog.cancel-button-text": string;
    "web-player.download.remove-download-confirmation-dialog.confirm-button-label": string;
    "web-player.download.remove-download-confirmation-dialog.confirm-button-text": string;
    "web-player.download.remove-download-confirmation-dialog.message": string;
    "web-player.download.remove-download-confirmation-dialog.message-remote": string;
    "web-player.download.remove-download-confirmation-dialog.title": string;
    "web-player.episode.description": string;
    "web-player.episode.transcript": string;
    "web-player.episode.transcript.disclaimer": string;
    "web-player.feedback.hidden": string;
    "web-player.feedback.hide-song": string;
    "web-player.feedback.track-banned-in-context": string;
    "web-player.feedback.track-banned-in-context-undo": string;
    "web-player.global-nav-bar.blend-button.subtitle": string;
    "web-player.global-nav-bar.blend-button.title": string;
    "web-player.global-nav-bar.create-button.label": string;
    "web-player.global-nav-bar.create-button.tooltip": string;
    "web-player.global-nav-bar.folder-button.subtitle": string;
    "web-player.global-nav-bar.folder-button.title": string;
    "web-player.global-nav-bar.jam-button.subtitle": string;
    "web-player.global-nav-bar.jam-button.title": string;
    "web-player.global-nav-bar.playlist-button.subtitle": string;
    "web-player.liked-songs.clear-filter": string;
    "web-player.liked-songs.liked-songs-filter-tags": string;
    "web-player.lyrics.ad": string;
    "web-player.lyrics.capped.learn-more": string;
    "web-player.lyrics.capped.monthly-limit-reached": string;
    "web-player.lyrics.error": string;
    "web-player.lyrics.noLyrics0": string;
    "web-player.lyrics.noLyrics1": string;
    "web-player.lyrics.noLyrics2": string;
    "web-player.lyrics.noLyrics3": string;
    "web-player.lyrics.providedBy": string;
    "web-player.lyrics.sync-button.title": string;
    "web-player.lyrics.title": string;
    "web-player.lyrics.translate": string;
    "web-player.lyrics.translating.to": string;
    "web-player.lyrics.translation.none": string;
    "web-player.lyrics.translation.not_available": string;
    "web-player.lyrics.unsynced": string;
    "web-player.merch.seeAllUri": string;
    "web-player.merch.title": string;
    "web-player.notification-center.button-label": string;
    "web-player.notification-center.empty-state": string;
    "web-player.now-playing-view.artist-about.title": string;
    "web-player.now-playing-view.author-about.title": string;
    "web-player.now-playing-view.chapters": string;
    "web-player.now-playing-view.chapters.disclaimer": string;
    "web-player.now-playing-view.cinema-mode.expand": string;
    "web-player.now-playing-view.credits": string;
    "web-player.now-playing-view.dubbed-episodes.description-multiple": string;
    "web-player.now-playing-view.dubbed-episodes.description-single": string;
    "web-player.now-playing-view.dubbed-episodes.title-multiple": string;
    "web-player.now-playing-view.dubbed-episodes.title-single": string;
    "web-player.now-playing-view.dubbed-episodes.title-single-with-language": string;
    "web-player.now-playing-view.empty-queue": string;
    "web-player.now-playing-view.empty-queue-cta": string;
    "web-player.now-playing-view.empty-state-cta": string;
    "web-player.now-playing-view.hide": string;
    "web-player.now-playing-view.label": string;
    "web-player.now-playing-view.lyrics.cinema-mode": string;
    "web-player.now-playing-view.lyrics.fullscreen": string;
    "web-player.now-playing-view.lyrics.hide-option": string;
    "web-player.now-playing-view.lyrics.show-less": string;
    "web-player.now-playing-view.lyrics.show-more": string;
    "web-player.now-playing-view.lyrics.title-preview": string;
    "web-player.now-playing-view.npv-merch": string;
    "web-player.now-playing-view.on-tour": string;
    "web-player.now-playing-view.open-queue": string;
    "web-player.now-playing-view.original-episode.description": string;
    "web-player.now-playing-view.original-episode.description-with-language": string;
    "web-player.now-playing-view.original-episode.title": string;
    "web-player.now-playing-view.original-episode.title-with-language": string;
    "web-player.now-playing-view.podcast-about.title": string;
    "web-player.now-playing-view.related-audio-tracks-title": string;
    "web-player.now-playing-view.show-all": string;
    "web-player.now-playing-view.show.lyrics": string;
    "web-player.now-playing-view.video.playing-in-pip": string;
    "web-player.now-playing-view.video.return-playback": string;
    "web-player.now-playing-view.web2desktop-funnel.button": string;
    "web-player.now-playing-view.web2desktop-funnel.subtitle": string;
    "web-player.now-playing-view.web2desktop-funnel.title": string;
    "web-player.offline.empty-state.subtitle": string;
    "web-player.offline.empty-state.title": string;
    "web-player.onboarding-checklist.card.open-checklist-button": string;
    "web-player.onboarding-checklist.complete-card.text": string;
    "web-player.onboarding-checklist.complete-card.title": string;
    "web-player.onboarding-checklist.menu.text": string;
    "web-player.onboarding-checklist.menu.text.complete": string;
    "web-player.onboarding-checklist.menu.title": string;
    "web-player.onboarding-checklist.menu.title.complete": string;
    "web-player.onboarding-checklist.progress": string;
    "web-player.onboarding-checklist.shelf.title": string;
    "web-player.onboarding-checklist.snackbar.action": string;
    "web-player.onboarding-checklist.snackbar.message": string;
    "web-player.onboarding-checklist.task.desktop.become-a-pro.action": string;
    "web-player.onboarding-checklist.task.desktop.become-a-pro.description": string;
    "web-player.onboarding-checklist.task.desktop.become-a-pro.title": string;
    "web-player.onboarding-checklist.task.desktop.queue-it-up.action": string;
    "web-player.onboarding-checklist.task.desktop.queue-it-up.description": string;
    "web-player.onboarding-checklist.task.desktop.queue-it-up.title": string;
    "web-player.onboarding-checklist.task.desktop.start-playing.action": string;
    "web-player.onboarding-checklist.task.desktop.start-playing.description": string;
    "web-player.onboarding-checklist.task.desktop.start-playing.title": string;
    "web-player.onboarding-checklist.task.desktop.try-mini-player.action": string;
    "web-player.onboarding-checklist.task.desktop.try-mini-player.description": string;
    "web-player.onboarding-checklist.task.desktop.try-mini-player.title": string;
    "web-player.onboarding-checklist.task.desktop.watch-a-video.action": string;
    "web-player.onboarding-checklist.task.desktop.watch-a-video.description": string;
    "web-player.onboarding-checklist.task.desktop.watch-a-video.title": string;
    "web-player.onboarding-checklist.task.spotify.create-playlist.action": string;
    "web-player.onboarding-checklist.task.spotify.create-playlist.description": string;
    "web-player.onboarding-checklist.task.spotify.create-playlist.title": string;
    "web-player.onboarding-checklist.task.spotify.queue-it-up.action": string;
    "web-player.onboarding-checklist.task.spotify.queue-it-up.description": string;
    "web-player.onboarding-checklist.task.spotify.queue-it-up.title": string;
    "web-player.onboarding-checklist.task.spotify.save-playlist.action": string;
    "web-player.onboarding-checklist.task.spotify.save-playlist.description": string;
    "web-player.onboarding-checklist.task.spotify.save-playlist.title": string;
    "web-player.onboarding-checklist.task.spotify.sign-up.description": string;
    "web-player.onboarding-checklist.task.spotify.sign-up.title": string;
    "web-player.onboarding-checklist.task.spotify.start-playing.action": string;
    "web-player.onboarding-checklist.task.spotify.start-playing.description": string;
    "web-player.onboarding-checklist.task.spotify.start-playing.title": string;
    "web-player.onboarding-checklist.task.spotify.try-mini-player.action": string;
    "web-player.onboarding-checklist.task.spotify.try-mini-player.description": string;
    "web-player.onboarding-checklist.task.spotify.try-mini-player.title": string;
    "web-player.onboarding-checklist.widget.tooltip": string;
    "web-player.onboarding.progress-button-label": string;
    "web-player.pigeon.audio-quality.automatic.details": string;
    "web-player.pigeon.audio-quality.automatic.label": string;
    "web-player.pigeon.audio-quality.change-button": string;
    "web-player.pigeon.audio-quality.file-quality": string;
    "web-player.pigeon.audio-quality.high.bitrate": string;
    "web-player.pigeon.audio-quality.high.bitrate-details.subtitle": string;
    "web-player.pigeon.audio-quality.high.label": string;
    "web-player.pigeon.audio-quality.lossless": string;
    "web-player.pigeon.audio-quality.lossless-16.bitrate": string;
    "web-player.pigeon.audio-quality.lossless-16.bitrate-details-1": string;
    "web-player.pigeon.audio-quality.lossless-16.bitrate-details-2": string;
    "web-player.pigeon.audio-quality.lossless-16.label": string;
    "web-player.pigeon.audio-quality.lossless-24.bitrate": string;
    "web-player.pigeon.audio-quality.lossless-24.bitrate-details-1": string;
    "web-player.pigeon.audio-quality.lossless-24.bitrate-details-2": string;
    "web-player.pigeon.audio-quality.lossless-24.label": string;
    "web-player.pigeon.audio-quality.low.bitrate": string;
    "web-player.pigeon.audio-quality.low.bitrate-details.subtitle": string;
    "web-player.pigeon.audio-quality.low.label": string;
    "web-player.pigeon.audio-quality.normal.bitrate": string;
    "web-player.pigeon.audio-quality.normal.bitrate-details.subtitle": string;
    "web-player.pigeon.audio-quality.normal.label": string;
    "web-player.pigeon.audio-quality.unknown.label": string;
    "web-player.pigeon.audio-quality.very-high.bitrate": string;
    "web-player.pigeon.audio-quality.very-high.bitrate-details.subtitle": string;
    "web-player.pigeon.audio-quality.very-high.label": string;
    "web-player.pigeon.get-started.button": string;
    "web-player.pigeon.get-started.subtitle": string;
    "web-player.pigeon.get-started.title": string;
    "web-player.pigeon.help-cards.bluetooth-degrades-lossless.body": string;
    "web-player.pigeon.help-cards.bluetooth-degrades-lossless.title": string;
    "web-player.pigeon.help-cards.default-to-very-high.body": string;
    "web-player.pigeon.help-cards.default-to-very-high.title": string;
    "web-player.pigeon.help-cards.listen-offline.body": string;
    "web-player.pigeon.help-cards.listen-offline.title": string;
    "web-player.pigeon.help-cards.lossless-unavailable.body": string;
    "web-player.pigeon.help-cards.lossless-unavailable.title": string;
    "web-player.pigeon.help-cards.need-to-redownload.body": string;
    "web-player.pigeon.help-cards.need-to-redownload.title": string;
    "web-player.pigeon.help-cards.opt-out-of-downgrade.body": string;
    "web-player.pigeon.help-cards.opt-out-of-downgrade.title": string;
    "web-player.pigeon.help-cards.poor-bandwidth-interferes.body": string;
    "web-player.pigeon.help-cards.poor-bandwidth-interferes.title": string;
    "web-player.pigeon.introduction.button.done": string;
    "web-player.pigeon.introduction.button.next": string;
    "web-player.pigeon.introduction.step-1.subtitle": string;
    "web-player.pigeon.introduction.step-1.title": string;
    "web-player.pigeon.introduction.step-2.subtitle": string;
    "web-player.pigeon.introduction.step-2.title": string;
    "web-player.pigeon.introduction.step-3.subtitle": string;
    "web-player.pigeon.introduction.step-3.title": string;
    "web-player.pip-mini-player.snackbar.link-opened-in-main-window": string;
    "web-player.pip-mini-player.upsell.cta-button": string;
    "web-player.pip-mini-player.upsell.subtitle": string;
    "web-player.pip-mini-player.upsell.title": string;
    "web-player.pip-mini-player.window-title": string;
    "web-player.playlist.booklist-not-supported-title": string;
    "web-player.playlist.booklist-not-supported.message": string;
    "web-player.playlist.booklist-recommender-dsa-message": string;
    "web-player.playlist.daylist.link-back-banner.link-text": string;
    "web-player.playlist.daylist.link-back-banner.title": string;
    "web-player.playlist.daylist.next-update": string;
    "web-player.playlist.more-like-this.section-header-title": string;
    "web-player.playlist.recommender-dsa-message": string;
    "web-player.prerelease.album_anonymous_presave": string;
    "web-player.prerelease.album_feedback_presaved": string;
    "web-player.prerelease.album_tracklist_preview": string;
    "web-player.prerelease.audiobook_feedback_presaved": string;
    "web-player.prerelease.countdown_label": string;
    "web-player.prerelease.days": {
      one: string;
      other: string;
    };
    "web-player.prerelease.hours": {
      one: string;
      other: string;
    };
    "web-player.prerelease.listen_now": string;
    "web-player.prerelease.minutes": {
      one: string;
      other: string;
    };
    "web-player.prerelease.presave": string;
    "web-player.prerelease.presaved": string;
    "web-player.prerelease.releases_on": string;
    "web-player.prerelease.seconds": {
      one: string;
      other: string;
    };
    "web-player.puffin.activation-1.button": string;
    "web-player.puffin.activation-1.subtitle": string;
    "web-player.puffin.activation-1.title": string;
    "web-player.puffin.activation-2.button-cancel": string;
    "web-player.puffin.activation-2.button-confirm": string;
    "web-player.puffin.activation-2.subtitle": string;
    "web-player.puffin.activation-2.title": string;
    "web-player.puffin.activation-3.subtitle": string;
    "web-player.puffin.activation-3.title": string;
    "web-player.puffin.activation-dialog.button-cancel": string;
    "web-player.puffin.activation-dialog.button-confirm": string;
    "web-player.puffin.activation-dialog.subtitle": string;
    "web-player.puffin.activation-dialog.title": string;
    "web-player.puffin.button.done": string;
    "web-player.puffin.device-connection-lost.tip-1": string;
    "web-player.puffin.device-connection-lost.tip-2": string;
    "web-player.puffin.device-connection-lost.tip-3": string;
    "web-player.puffin.device-connection-lost.tip-4": string;
    "web-player.puffin.device-connection-lost.title": string;
    "web-player.puffin.dismiss-get-started.body": string;
    "web-player.puffin.dismiss-get-started.cancel": string;
    "web-player.puffin.dismiss-get-started.title": string;
    "web-player.puffin.enhancement-unavailable.content-restriction": string;
    "web-player.puffin.error-troubleshooting": string;
    "web-player.puffin.get-started.subtitle": string;
    "web-player.puffin.get-started.title": string;
    "web-player.puffin.incompatible-headphones.close-button": string;
    "web-player.puffin.incompatible-headphones.description": string;
    "web-player.puffin.incompatible-headphones.subtitle": string;
    "web-player.puffin.incompatible-headphones.title": string;
    "web-player.puffin.listening-with.change-model": string;
    "web-player.puffin.listening-with.filters.specific-subtitle": string;
    "web-player.puffin.listening-with.filters.specific-subtitle-unavailable": string;
    "web-player.puffin.listening-with.filters.specific-title": string;
    "web-player.puffin.listening-with.model": string;
    "web-player.puffin.listening-with.placeholder-model": string;
    "web-player.puffin.manual-selection.airpods.subtitle": string;
    "web-player.puffin.manual-selection.airpods.title": string;
    "web-player.puffin.manual-selection.empty.subtitle": string;
    "web-player.puffin.manual-selection.empty.title": string;
    "web-player.puffin.manual-selection.models-list": string;
    "web-player.puffin.manual-selection.not-found-button": string;
    "web-player.puffin.manual-selection.search-placeholder": string;
    "web-player.puffin.manual-selection.subtitle": string;
    "web-player.puffin.manual-selection.title": string;
    "web-player.puffin.normalization-settings-dialog.cancel": string;
    "web-player.puffin.normalization-settings-dialog.confirm": string;
    "web-player.puffin.normalization-settings-dialog.subtitle.normalization-turn-off": string;
    "web-player.puffin.normalization-settings-dialog.subtitle.normalization-turn-on": string;
    "web-player.puffin.normalization-settings-dialog.subtitle.volume-increase": string;
    "web-player.puffin.normalization-settings-dialog.title": string;
    "web-player.puffin.reset-headphones.dialog.confirm": string;
    "web-player.puffin.reset-headphones.dialog.subtitle": string;
    "web-player.puffin.reset-headphones.dialog.title": string;
    "web-player.puffin.reset-headphones.menu-item": string;
    "web-player.puffin.signifier-text": string;
    "web-player.puffin.upsell.enhance-headphones": string;
    "web-player.puffin.upsell.enhance-headphones.cancel": string;
    "web-player.puffin.upsell.enhance-headphones.confirm": string;
    "web-player.puffin.upsell.enhance-headphones.not-headphones": string;
    "web-player.puffin.wired-connection": string;
    "web-player.queue-history.item-type.chapter": string;
    "web-player.queue-history.item-type.episode": string;
    "web-player.queue-history.item-type.track": string;
    "web-player.read-along-transcript.now-playing-view.read-along": string;
    "web-player.read-along-transcript.sync.button": string;
    "web-player.remote-downloads.context-menu.this-computer": string;
    "web-player.remote-downloads.feedback.downloading-to-remote-device": string;
    "web-player.report-issue.close": string;
    "web-player.report-issue.customer-service": string;
    "web-player.report-issue.log-files-copied-text": string;
    "web-player.report-issue.open-folder-here": string;
    "web-player.report-issue.personal-support-text": string;
    "web-player.report-issue.report-button-label": string;
    "web-player.report-issue.report-instruction-text": string;
    "web-player.report-issue.title": string;
    "web-player.report-issue.type-select-default": string;
    "web-player.report-issue.type-select-label": string;
    "web-player.report-issue.type.black": string;
    "web-player.report-issue.type.crash": string;
    "web-player.report-issue.type.functional": string;
    "web-player.report-issue.type.install": string;
    "web-player.report-issue.type.load": string;
    "web-player.report-issue.type.login": string;
    "web-player.report-issue.type.other": string;
    "web-player.report-issue.type.performance": string;
    "web-player.report-issue.type.playback": string;
    "web-player.report-issue.type.video": string;
    "web-player.search-modal.a11y.contentbyartist": string;
    "web-player.search-modal.a11y.label": string;
    "web-player.search-modal.instructions.go-back": string;
    "web-player.search-modal.instructions.navigate": string;
    "web-player.search-modal.instructions.nested-page": string;
    "web-player.search-modal.instructions.open": string;
    "web-player.search-modal.instructions.play": string;
    "web-player.search-modal.lyrics-match": string;
    "web-player.search-modal.offline": string;
    "web-player.search-modal.result.album": string;
    "web-player.search-modal.result.artist": string;
    "web-player.search-modal.result.audiobook": string;
    "web-player.search-modal.result.author": string;
    "web-player.search-modal.result.episode": string;
    "web-player.search-modal.result.genre": string;
    "web-player.search-modal.result.playlist": string;
    "web-player.search-modal.result.podcast": string;
    "web-player.search-modal.result.track": string;
    "web-player.search-modal.result.user": string;
    "web-player.search-modal.search-entity": string;
    "web-player.search-modal.title": string;
    "web-player.search.suggestions.header.down": string;
    "web-player.search.suggestions.header.enter": string;
    "web-player.search.suggestions.header.label": string;
    "web-player.search.suggestions.header.navigate": string;
    "web-player.search.suggestions.header.search": string;
    "web-player.search.suggestions.header.up": string;
    "web-player.search.suggestions.offline.description": string;
    "web-player.search.suggestions.offline.title": string;
    "web-player.search.suggestions.view-all-results": string;
    "web-player.settings.account": string;
    "web-player.settings.autoplay-dsa-enabled": string;
    "web-player.settings.content-preferences": string;
    "web-player.settings.edit-login-methods": string;
    "web-player.settings.edit-login-methods-button": string;
    "web-player.settings.personalized-recommendations": string;
    "web-player.settings.personalized-recommendations-body-text": string;
    "web-player.settings.personalized-recommendations-turned-off.modal-body": string;
    "web-player.settings.personalized-recommendations-turned-off.modal-body-missing-features-intro": string;
    "web-player.settings.personalized-recommendations-turned-off.modal-body-persistent-features-intro": string;
    "web-player.settings.personalized-recommendations-turned-off.modal-confirm": string;
    "web-player.settings.personalized-recommendations-turned-off.modal-disclaimer": string;
    "web-player.settings.personalized-recommendations-turned-off.modal-header": string;
    "web-player.settings.personalized-recommendations.error-modal-button": string;
    "web-player.settings.personalized-recommendations.error-modal-message": string;
    "web-player.settings.personalized-recommendations.modal-body": string;
    "web-player.settings.personalized-recommendations.modal-body-missing-features-1": string;
    "web-player.settings.personalized-recommendations.modal-body-missing-features-2": string;
    "web-player.settings.personalized-recommendations.modal-body-missing-features-3": string;
    "web-player.settings.personalized-recommendations.modal-body-missing-features-intro": string;
    "web-player.settings.personalized-recommendations.modal-body-persistent-features-1": string;
    "web-player.settings.personalized-recommendations.modal-body-persistent-features-intro": string;
    "web-player.settings.personalized-recommendations.modal-cancel": string;
    "web-player.settings.personalized-recommendations.modal-confirm": string;
    "web-player.settings.personalized-recommendations.modal-delay-disclaimer": string;
    "web-player.settings.personalized-recommendations.modal-header": string;
    "web-player.settings.playback.smart-shuffle": string;
    "web-player.settings.playback.smart-shuffle-dsa": string;
    "web-player.settings.quality.download-quality.lossless-snackbar-message": string;
    "web-player.settings.quality.streaming-quality.info-text": string;
    "web-player.settings.quality.streaming-quality.lossless-confirm-dialog.cancel": string;
    "web-player.settings.quality.streaming-quality.lossless-confirm-dialog.confirm": string;
    "web-player.settings.quality.streaming-quality.lossless-confirm-dialog.description": string;
    "web-player.settings.quality.streaming-quality.lossless-confirm-dialog.title": string;
    "web-player.settings.zoom.balanced-label": string;
    "web-player.settings.zoom.compact-label": string;
    "web-player.settings.zoom.description": string;
    "web-player.settings.zoom.larger-label": string;
    "web-player.settings.zoom.reset-button-label": string;
    "web-player.settings.zoom.shortcut-description": string;
    "web-player.settings.zoom.title": string;
    "web-player.settings.zoom.zoom-level-radio-button-label": string;
    "web-player.show.rating.header": string;
    "web-player.show.rating.listenFirstDescription": string;
    "web-player.show.rating.listenFirstTitle": string;
    "web-player.show.rating.rateShow": string;
    "web-player.show.rating.snackbarFailure": string;
    "web-player.show.rating.snackbarSuccess": string;
    "web-player.show.rating.starAriaLabel": {
      one: string;
      other: string;
    };
    "web-player.show.rating.submit": string;
    "web-player.sleep-timer.npv.submenu.label": string;
    "web-player.sleep-timer.option.end.episode": string;
    "web-player.sleep-timer.option.end.track": string;
    "web-player.sleep-timer.option.hours": {
      one: string;
      other: string;
    };
    "web-player.sleep-timer.option.minutes": {
      one: string;
      other: string;
    };
    "web-player.sleep-timer.option.off": string;
    "web-player.sleep-timer.player-controls.button.tooltip": string;
    "web-player.sleep-timer.player-controls.popover.title": string;
    "web-player.sleep-timer.player-controls.popover.title.timeleft": string;
    "web-player.sleep-timer.snackbar.timer-set": string;
    "web-player.smart-shuffle.add-to-playlist-button": string;
    "web-player.smart-shuffle.add-to-playlist-button-fallback": string;
    "web-player.smart-shuffle.add-to-playlist-feedback": string;
    "web-player.smart-shuffle.add-to-playlist-feedback-fallback": string;
    "web-player.smart-shuffle.button-disable-shuffle-generic": string;
    "web-player.smart-shuffle.button-disable-shuffle-specific": string;
    "web-player.smart-shuffle.button-enable-shuffle-generic": string;
    "web-player.smart-shuffle.button-enable-shuffle-specific": string;
    "web-player.smart-shuffle.button-enable-smart-shuffle-generic": string;
    "web-player.smart-shuffle.button-enable-smart-shuffle-specific": string;
    "web-player.smart-shuffle.disabled-smart-shuffle": string;
    "web-player.smart-shuffle.dsa-message": string;
    "web-player.smart-shuffle.enabled-smart-shuffle": string;
    "web-player.smart-shuffle.enabled-smart-shuffle-not-active-playlist": string;
    "web-player.smart-shuffle.icon-hover-label": string;
    "web-player.smart-shuffle.introduction-modal-description": string;
    "web-player.smart-shuffle.introduction-modal-ok-button": string;
    "web-player.smart-shuffle.introduction-modal-title": string;
    "web-player.smart-shuffle.menu-button": string;
    "web-player.smart-shuffle.menu-text": string;
    "web-player.smart-shuffle.offline-add-recommendation-feedback": string;
    "web-player.smart-shuffle.offline-remove-recommendation-feedback": string;
    "web-player.smart-shuffle.removed-from-recommendations-button": string;
    "web-player.smart-shuffle.removed-from-recommendations-feedback": string;
    "web-player.smart-shuffle.removed-from-recommendations-feedback-undo": string;
    "web-player.smart-shuffle.removed-from-recommendations-feedback-undone": string;
    "web-player.smart-shuffle.shuffle": string;
    "web-player.smart-shuffle.smart-shuffle": string;
    "web-player.social-connect.broadcasting.bradcasting-device-subtitle": string;
    "web-player.social-connect.broadcasting.join-listening-session-modal.button-tertiary": string;
    "web-player.social-connect.broadcasting.join-listening-session-modal.subtitle": string;
    "web-player.social-connect.broadcasting.toggle-label": string;
    "web-player.social-connect.controls.participant-volume-control": string;
    "web-player.social-connect.controls.queue-only-mode": string;
    "web-player.social-connect.end-session.cancel": string;
    "web-player.social-connect.end-session.confirm": string;
    "web-player.social-connect.end-session.end-session-button": string;
    "web-player.social-connect.end-session.sub-title": string;
    "web-player.social-connect.end-session.title": string;
    "web-player.social-connect.facepile.and-others": {
      one: string;
      other: string;
    };
    "web-player.social-connect.generic-error.confirmation-button": string;
    "web-player.social-connect.generic-error.sub-title": string;
    "web-player.social-connect.generic-error.title": string;
    "web-player.social-connect.group-session-logo-alt": string;
    "web-player.social-connect.invitation-modal.button-primary": string;
    "web-player.social-connect.invitation-modal.button-tertiary": string;
    "web-player.social-connect.invitation-modal.subtitle": string;
    "web-player.social-connect.invitation-modal.success-toast-message": string;
    "web-player.social-connect.invitation-modal.title": string;
    "web-player.social-connect.invitation.qr-code.description": string;
    "web-player.social-connect.invitation.qr-code.title": string;
    "web-player.social-connect.invite-button": string;
    "web-player.social-connect.join-modal.button-primary": string;
    "web-player.social-connect.join-modal.button-tertiary": string;
    "web-player.social-connect.join-modal.continue-on-this-device": string;
    "web-player.social-connect.join-modal.continue-on-this-device-subtitle": string;
    "web-player.social-connect.join-modal.device-name.this-browser": string;
    "web-player.social-connect.join-modal.device-name.this-computer": string;
    "web-player.social-connect.join-modal.play-from-host-speaker": string;
    "web-player.social-connect.join-modal.play-from-host-speaker-subtitle": string;
    "web-player.social-connect.join-modal.privacy-notice": string;
    "web-player.social-connect.join-modal.success.subtitle": string;
    "web-player.social-connect.join-modal.success.title": string;
    "web-player.social-connect.join-modal.title": string;
    "web-player.social-connect.kick-users.remove-the-user": string;
    "web-player.social-connect.leave-session.cancel": string;
    "web-player.social-connect.leave-session.leave-session-button": string;
    "web-player.social-connect.leave-session.sub-title": string;
    "web-player.social-connect.leave-session.title": string;
    "web-player.social-connect.menu-action.title": string;
    "web-player.social-connect.participant-list.back-to-queue": string;
    "web-player.social-connect.participant-list.guest": string;
    "web-player.social-connect.participant-list.host": string;
    "web-player.social-connect.participant-list.remove-all-guests": string;
    "web-player.social-connect.participant-list.remove-guest": string;
    "web-player.social-connect.participant-list.remove-guest-accessible-label": string;
    "web-player.social-connect.participant-list.remove-guest-cancel": string;
    "web-player.social-connect.participant-list.remove-guest-dialog": string;
    "web-player.social-connect.participant-list.subtitle": string;
    "web-player.social-connect.participant-list.title": string;
    "web-player.social-connect.participant-list.visibility-info": string;
    "web-player.social-connect.premium-upsell.confirmation-button": string;
    "web-player.social-connect.promotion.how-to-start-a-jam-reminder": string;
    "web-player.social-connect.redirect-modal.cancel-button": string;
    "web-player.social-connect.redirect-modal.confirmation-button": string;
    "web-player.social-connect.redirect-modal.sub-title": string;
    "web-player.social-connect.redirect-modal.title": string;
    "web-player.social-connect.session-ended.confirmation-button": string;
    "web-player.social-connect.session-ended.sub-title": string;
    "web-player.social-connect.session-ended.title": string;
    "web-player.social-connect.session-info.title": string;
    "web-player.social-connect.share.title": string;
    "web-player.social-connect.toast.ended": string;
    "web-player.social-connect.toast.multiple-people-joined": string;
    "web-player.social-connect.toast.multiple-people-left": string;
    "web-player.social-connect.toast.one-person-joined": string;
    "web-player.social-connect.toast.one-person-left": string;
    "web-player.social-connect.toast.participant-volume-control.enabled": string;
    "web-player.social-connect.toast.participant-volume-control.guest.disabled": string;
    "web-player.social-connect.toast.participant-volume-control.host.disabled": string;
    "web-player.social-connect.toast.queue-only-mode.guest.disabled": string;
    "web-player.social-connect.toast.queue-only-mode.guest.enabled": string;
    "web-player.social-connect.toast.queue-only-mode.guest.warning": string;
    "web-player.social-connect.toast.queue-only-mode.host.disabled": string;
    "web-player.social-connect.toast.queue-only-mode.host.enabled": string;
    "web-player.social-connect.toast.two-people-joined": string;
    "web-player.social-connect.toast.two-people-left": string;
    "web-player.user-comments.collapsed-reply.count": {
      one: string;
      other: string;
    };
    "web-player.user-comments.comment": string;
    "web-player.user-comments.comment-input.first-comment": string;
    "web-player.user-comments.comment-input.leave-comment": string;
    "web-player.user-comments.comment-input.platform-rules": string;
    "web-player.user-comments.comment-list-header.count": string;
    "web-player.user-comments.commenting-restrictions.already-commented": string;
    "web-player.user-comments.commenting-restrictions.disabled": string;
    "web-player.user-comments.commenting-restrictions.new-user-account": string;
    "web-player.user-comments.comments": string;
    "web-player.user-comments.creator-reaction-liked-comment": string;
    "web-player.user-comments.delete-comment-dialog.subtitle": string;
    "web-player.user-comments.delete-comment-dialog.success": string;
    "web-player.user-comments.delete-comment-dialog.title": string;
    "web-player.user-comments.in-review": string;
    "web-player.user-comments.just-now": string;
    "web-player.user-comments.see-more": string;
    "web-player.user-comments.sensitive.disclaimer": string;
    "web-player.user-comments.sensitive.show-all": string;
    "web-player.user-comments.sensitive.showing-all": string;
    "web-player.user-comments.top-comment-card-header.count": string;
    "web-player.user-comments.trust-safety-modal.agree-to-continue": string;
    "web-player.user-comments.trust-safety-modal.row-1.subtitle": string;
    "web-player.user-comments.trust-safety-modal.row-1.title": string;
    "web-player.user-comments.trust-safety-modal.row-2.subtitle": string;
    "web-player.user-comments.trust-safety-modal.row-2.title": string;
    "web-player.user-comments.trust-safety-modal.row-3.subtitle": string;
    "web-player.user-comments.trust-safety-modal.row-3.title": string;
    "web-player.user-comments.trust-safety-modal.submit": string;
    "web-player.user-comments.trust-safety-modal.subtitle": string;
    "web-player.user-comments.trust-safety-modal.terms-conditions": string;
    "web-player.user-comments.trust-safety-modal.terms-conditions.platform-rules": string;
    "web-player.user-comments.trust-safety-modal.terms-conditions.terms-of-use": string;
    "web-player.user-comments.trust-safety-modal.title": string;
    "web-player.user-page.following.filter-all": string;
    "web-player.user-page.following.filter-artists": string;
    "web-player.user-page.following.filter-friends": string;
    "web-player.venues.concerts": string;
    "web-player.venues.error.generic.title": string;
    "web-player.venues.error.not_found.message": string;
    "web-player.venues.error.not_found.title": string;
    "web-player.venues.followers": {
      one: string;
      other: string;
    };
    "web-player.venues.venue": string;
    "web-player.watch-feed.entity-button.aria-label": string;
    "web-player.watch-feed.entity-button.label-album": string;
    "web-player.watch-feed.entity-button.label-artist": string;
    "web-player.watch-feed.entity-button.label-playlist": string;
    "web-player.watch-feed.entity-button.label-podcast": string;
    "web-player.watch-feed.view.next-button": string;
    "web-player.watch-feed.view.previous-button": string;
    "web-player.watch-feed.view.shortcuts.add-to-library": string;
    "web-player.watch-feed.view.shortcuts.add-to-queue": string;
    "web-player.watch-feed.view.shortcuts.description": string;
    "web-player.watch-feed.view.shortcuts.mute-unmute": string;
    "web-player.watch-feed.view.shortcuts.next": string;
    "web-player.watch-feed.view.shortcuts.previous": string;
    "web-player.watch-feed.view.shortcuts.title": string;
    "web-player.whats-new-feed.button-label": string;
    "web-player.whats-new-feed.earlier-section-title": string;
    "web-player.whats-new-feed.filters.episodes": string;
    "web-player.whats-new-feed.filters.music": string;
    "web-player.whats-new-feed.filters.notifications": string;
    "web-player.whats-new-feed.filters.options": string;
    "web-player.whats-new-feed.new-section-title": string;
    "web-player.whats-new-feed.panel.empty-results-all.message": string;
    "web-player.whats-new-feed.panel.empty-results-all.title": string;
    "web-player.whats-new-feed.panel.empty-results-music.message": string;
    "web-player.whats-new-feed.panel.empty-results-music.title": string;
    "web-player.whats-new-feed.panel.empty-results-podcast.message": string;
    "web-player.whats-new-feed.panel.empty-results-podcast.title": string;
    "web-player.whats-new-feed.panel.error": string;
    "web-player.whats-new-feed.panel.error.button": string;
    "web-player.whats-new-feed.panel.subtitle": string;
    "web-player.whats-new-feed.panel.title": string;
    "web-player.your-dj.jumpbutton.tooltip.desc": string;
    "web-player.your-dj.jumpbutton.tooltip.hover": string;
    "web-player.your-dj.jumpbutton.tooltip.title": string;
    "web-player.your-dj.npv.queue.description": string;
    "web-player.your-dj.npv.queue.title": string;
    "web-player.your-dj.upsell.notavailable.description": string;
    "web-player.your-dj.upsell.notavailable.gotolink": string;
    "web-player.your-dj.upsell.notavailable.notnow": string;
    "web-player.your-dj.upsell.notavailable.title": string;
    "web-player.your-dj.upsell.notavailableonweb.ack": string;
    "web-player.your-dj.upsell.notavailableonweb.description": string;
    "web-player.your-dj.upsell.notavailableonweb.title": string;
    "web-player.your-dj.upsell.premium.description": string;
    "web-player.your-dj.upsell.premium.no": string;
    "web-player.your-dj.upsell.premium.title": string;
    "web-player.your-dj.upsell.premium.yes": string;
    "web-player.your-library-x.clear_filters": string;
    "web-player.your-library-x.collapse-folder": string;
    "web-player.your-library-x.collapse-your-library": string;
    "web-player.your-library-x.create.button-label": string;
    "web-player.your-library-x.create.create-a-new-playlist": string;
    "web-player.your-library-x.create.create-a-playlist-folder": string;
    "web-player.your-library-x.default_folder_name": string;
    "web-player.your-library-x.download-progress-count-out-of-total": string;
    "web-player.your-library-x.download-progress-title": string;
    "web-player.your-library-x.dsa-message": string;
    "web-player.your-library-x.dsa-message-link": string;
    "web-player.your-library-x.empty-results-text-short": string;
    "web-player.your-library-x.empty-results-title-short": string;
    "web-player.your-library-x.empty-state-folder-subtitle": string;
    "web-player.your-library-x.empty-state-folder-title": string;
    "web-player.your-library-x.empty-state-playlists-cta": string;
    "web-player.your-library-x.empty-state-playlists-subtitle": string;
    "web-player.your-library-x.empty-state-playlists-title": string;
    "web-player.your-library-x.empty-state-podcasts-browse": string;
    "web-player.your-library-x.empty-state-podcasts-keep-you-updated": string;
    "web-player.your-library-x.empty-state-podcasts-to-follow": string;
    "web-player.your-library-x.enlarge-your-library": string;
    "web-player.your-library-x.error-body": string;
    "web-player.your-library-x.error-button": string;
    "web-player.your-library-x.error-title": string;
    "web-player.your-library-x.event-item.subtitle": string;
    "web-player.your-library-x.expand-folder": string;
    "web-player.your-library-x.expand-your-library-fullscreen": string;
    "web-player.your-library-x.expanded-list-header.date-added": string;
    "web-player.your-library-x.expanded-list-header.played-at": string;
    "web-player.your-library-x.expanded-list-header.title": string;
    "web-player.your-library-x.feedback-remove-from-library-dialog-cancel-button": string;
    "web-player.your-library-x.feedback-remove-from-library-dialog-confirm-button": string;
    "web-player.your-library-x.feedback-remove-from-library-dialog-description": string;
    "web-player.your-library-x.feedback-remove-from-library-dialog-description-album": string;
    "web-player.your-library-x.feedback-remove-from-library-dialog-description-artist": string;
    "web-player.your-library-x.feedback-remove-from-library-dialog-description-audiobook": string;
    "web-player.your-library-x.feedback-remove-from-library-dialog-description-author": string;
    "web-player.your-library-x.feedback-remove-from-library-dialog-description-playlist": string;
    "web-player.your-library-x.feedback-remove-from-library-dialog-description-show": string;
    "web-player.your-library-x.feedback-remove-from-library-dialog-title": string;
    "web-player.your-library-x.filter_options": string;
    "web-player.your-library-x.minimize-your-library-fullscreen": string;
    "web-player.your-library-x.navigate-back-folder": string;
    "web-player.your-library-x.open-your-library": string;
    "web-player.your-library-x.pin-error.message": string;
    "web-player.your-library-x.pin-error.no-pin-in-folder.message": string;
    "web-player.your-library-x.pin-error.no-pin-in-folder.title": string;
    "web-player.your-library-x.pin-error.ok": string;
    "web-player.your-library-x.pin-error.title": string;
    "web-player.your-library-x.pinned": string;
    "web-player.your-library-x.playlist-unavailable": string;
    "web-player.your-library-x.reduce-your-library": string;
    "web-player.your-library-x.rename-folder": string;
    "web-player.your-library-x.rows.folder.number-of-folders": {
      one: string;
      other: string;
    };
    "web-player.your-library-x.rows.folder.number-of-playlists": {
      one: string;
      other: string;
    };
    "web-player.your-library-x.rows.liked-songs.subtitle": {
      one: string;
      other: string;
    };
    "web-player.your-library-x.rows.local-files.subtitle": {
      one: string;
      other: string;
    };
    "web-player.your-library-x.show-less": string;
    "web-player.your-library-x.show-more": string;
    "web-player.your-library-x.sort-and-view-picker.button-aria-label": string;
    "web-player.your-library-x.sort-and-view-picker.compact": string;
    "web-player.your-library-x.sort-and-view-picker.compact-grid": string;
    "web-player.your-library-x.sort-and-view-picker.compact-list": string;
    "web-player.your-library-x.sort-and-view-picker.default": string;
    "web-player.your-library-x.sort-and-view-picker.default-grid": string;
    "web-player.your-library-x.sort-and-view-picker.default-list": string;
    "web-player.your-library-x.sort-and-view-picker.list": string;
    "web-player.your-library-x.sort-and-view-picker.view-as": string;
    "web-player.your-library-x.sort_by": string;
    "web-player.your-library-x.subtitle-your-episodes": string;
    "web-player.your-library-x.text-filter.additional-aria-label": string;
    "web-player.your-library-x.text-filter.albums-placeholder": string;
    "web-player.your-library-x.text-filter.artists-placeholder": string;
    "web-player.your-library-x.text-filter.audiobooks-placeholder": string;
    "web-player.your-library-x.text-filter.authors-placeholder": string;
    "web-player.your-library-x.text-filter.downloaded-placeholder": string;
    "web-player.your-library-x.text-filter.events-placeholder": string;
    "web-player.your-library-x.text-filter.generic-placeholder": string;
    "web-player.your-library-x.text-filter.playlists-placeholder": string;
    "web-player.your-library-x.text-filter.shows-placeholder": string;
    "web-player.your-library-x.type-album": string;
    "web-player.your-library-x.type-artist": string;
    "web-player.your-library-x.type-audiobook": string;
    "web-player.your-library-x.type-author": string;
    "web-player.your-library-x.type-folder": string;
    "web-player.your-library-x.type-playlist": string;
    "web-player.your-library-x.type-prerelease-album": string;
    "web-player.your-library-x.type-prerelease-audiobook": string;
    "web-player.your-library-x.type-show": string;
    "web-player.your-library-x.unpin-confirmation-dialog.cancel-button-text": string;
    "web-player.your-library-x.unpin-confirmation-dialog.confirm-button-label-folder": string;
    "web-player.your-library-x.unpin-confirmation-dialog.confirm-button-label-playlist": string;
    "web-player.your-library-x.unpin-confirmation-dialog.confirm-button-text": string;
    "web-player.your-library-x.unpin-confirmation-dialog.message-folder": string;
    "web-player.your-library-x.unpin-confirmation-dialog.message-playlist": string;
    "web-player.your-library-x.unpin-confirmation-dialog.title-folder": string;
    "web-player.your-library-x.unpin-confirmation-dialog.title-playlist": string;
    "web-player.your-library-x.your-library": string;
    "web-player.your-sound-capsule-modal.dismiss": string;
    "web-player.your-sound-capsule-modal.get-premium": string;
    "web-player.your-sound-capsule-modal.not-available-text": string;
    "web-player.your-sound-capsule-modal.not-available-title": string;
    "web-player.your-sound-capsule-modal.open-app-text": string;
    "web-player.your-sound-capsule-modal.open-app-title": string;
    "web-player.your-sound-capsule-modal.premium-text": string;
    "web-player.your-sound-capsule-modal.premium-title": string;
    "ylx.clicktoplay": string;
  };
  Transport: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"];
  UBILogger: {
    _events: {
      _emitter: {
        _listeners: {};
        _metaListeners: {
          add: {};
          remove: {};
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    formatUiNavigateEvent: (a: any) => any;
    ubiLogger: {
      authenticationProvider: {
        isAuthenticated: () => boolean;
      };
      contextualProviders: {
        playContextUriProvider: {
          getPlayContextUri: () => string;
        };
        playbackIdProvider: {
          getPlaybackId: () => string;
        };
      };
      disableAutoBackgroundMonitoring: boolean;
      eventSender: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"];
      pageInfoProvider: {
        storageManager: {
          storageAdapter: {
            items: Map<any, any>;
          } & {
            clear: () => any;
            getItem: (a: any) => any;
            removeItem: (a: any) => any;
            setItem: (a: any, b: any) => any;
          };
        } & {
          clear: () => any;
          getItem: (a: any) => any;
          getStorageType: () => any;
          removeItem: (a: any) => any;
          setItem: (a: any, b: any) => any;
        };
      } & {
        getNavigationalRoot: () => any;
        getPageId: () => any;
        getPageInfo: () => any;
        getPageInstanceId: () => any;
        getPageUri: () => any;
        setPageInfo: (a: any) => any;
      };
      pageViewLogger: {
        authenticationProvider: PlatformTypes["UBILogger"]["ubiLogger"]["authenticationProvider"];
        currentWindowState: {
          focused: boolean;
          visible: boolean;
        };
        disableAutoBackgroundMonitoring: boolean;
        eventSender: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"];
        flowIdProvider: undefined;
        onBlur: () => undefined;
        onFocus: () => undefined;
        onVisibilityChange: () => undefined;
        pageInfoProvider: PlatformTypes["UBILogger"]["ubiLogger"]["pageInfoProvider"];
        storageManager: PlatformTypes["UBILogger"]["ubiLogger"]["pageInfoProvider"]["storageManager"];
      } & {
        addEventListeners: () => any;
        completeNavigation: (a: any) => any;
        generatePageInstanceId: () => string;
        getCurrentEntityUri: () => any;
        getCurrentNavigationalRoot: () => any;
        getCurrentPageId: () => any;
        getCurrentPageInstanceId: () => any;
        getNavigationStatus: () => any;
        getPendingInteractionId: () => any;
        getPendingNavigationReason: () => any;
        getPendingNavigationalRoot: () => any;
        handleFocusChange: (a: any) => any;
        handleFocusStateChange: (a: any) => any;
        handleVisibilityChange: (a: any) => any;
        isForeground: (a: any) => any;
        logClientGainedFocus: () => any;
        logClientLostFocus: () => any;
        logClientStarted: (a: any, b: any, c: any) => any;
        populateNavigationReason: () => any;
        removeEventListeners: () => any;
        resetNavStartInfo: () => any;
        setCurrent: (a: any, b: any, c: any, d: any) => any;
        setNavigationStatus: (a: any) => any;
        setPendingInteractionId: (a: any) => any;
        setPendingNavigationReason: (a: any) => any;
        setPendingNavigationalRoot: (a: any) => any;
        startNavigation: (a: any) => any;
      };
      storageManager: PlatformTypes["UBILogger"]["ubiLogger"]["pageInfoProvider"]["storageManager"];
    } & {
      getPageInstanceId: () => any;
      logClientGainedFocus: () => any;
      logClientLostFocus: () => any;
      logClientStarted: (a: any, b: any, c: any) => any;
      logImpression: (a: any) => any;
      logInteraction: (a: any) => any;
      logNavigation: (a: any, b: any) => any;
      logNavigationEnd: (a: any) => any;
      logNavigationStart: (a: any) => any;
      registerEventListeners: () => any;
      unregisterEventListeners: () => any;
    };
  } & {
    getEvents: () => any;
    getInteractionId: (a: any) => any;
    logClientStarted: (a: any, b: any) => any;
    logImpression: (a: any) => any;
    logInteraction: (a: any) => any;
    logNavigation: (a: any) => any;
  };
  UpdateAPI: {
    _updateClient: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      applyUpdate: (a: any, b: any) => any;
      subscribeStatus: (a: any, b: any) => any;
      triggerDownload: (a: any, b: any) => any;
    };
    _versionClient: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      getVersionInfo: (a: any, b: any) => any;
    };
  } & {
    applyUpdate: () => Promise<any>;
    getVersionInfo: () => Promise<any>;
    prepareUpdate: () => Promise<any>;
    subscribe: (a: any) => any;
  };
  UrlDispenserServiceClient: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["urlDispenserServiceClient"];
  UserAPI: {
    _cosmos: PlatformTypes["AuthorizationAPI"]["_cosmos"];
    _product_state_service: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"];
  } & {
    getUser: () => Promise<any>;
  };
  UserCommentsAPI: {
    _loader: PlatformTypes["FollowAPI"]["_loader"];
  } & {
    addComment: (a: any, b: any) => any;
    deleteComment: (a: any) => any;
    getComments: (a: any, b: any) => any;
    getTopComments: (a: any) => any;
  };
  VideoAPI: {
    _cosmos: PlatformTypes["AuthorizationAPI"]["_cosmos"];
    _esperantoTransport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    _eventSender: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"];
    _events: {
      _emitter: {
        _listeners: {
          picture_in_picture_changed: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
          subtitle_languages_changed: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
          subtitle_preferred_language_changed: Array<{
            listener: (a: any) => any;
            options: {};
          }>;
        };
        _metaListeners: {
          add: {};
          remove: {};
        };
      } & {
        _dispatchFromStore: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
        addListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
        addListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
        createEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
        emit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
        emitAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
        emitEvent: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
        emitEventAndWait: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
        emitEventSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
        emitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
        on: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
        onAddListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
        onRemoveListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
        once: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
        proxyEmit: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
        proxyEmitAll: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
        proxyEmitAllSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
        proxyEmitSync: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
        removeAllListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
        removeListener: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
        removeListeners: PlatformTypes["AdManagers"]["embeddedAd"]["adEventLogger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
      };
    } & {
      addListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["addListener"];
      createEvent: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["createEvent"];
      emit: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emit"];
      emitSync: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["emitSync"];
      onAddListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onAddListener"];
      onRemoveListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["onRemoveListener"];
      removeListener: PlatformTypes["AudioOutputDevicesAPI"]["_events"]["removeListener"];
    };
    _factories: PlatformTypes["AdManagers"]["vto"]["factories"];
    _failPlaybackOnStreamingReportingError: boolean;
    _hasMinimizeBitrateSupport: boolean;
    _hasPipSupport: boolean;
    _hasSubtitleSupport: boolean;
    _offlineCoordinator: null;
    _pendingEventsService: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      addPendingEvent: (a: any, b: any) => any;
      commitPendingEvent: (a: any, b: any) => any;
      replacePendingEvent: (a: any, b: any) => any;
    };
    _pictureInPictureState: boolean;
    _playbackService: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      duck: PlatformTypes["PlaybackAPI"]["_playbackService"]["duck"];
      getFiles: PlatformTypes["PlaybackAPI"]["_playbackService"]["getFiles"];
      getFormats: PlatformTypes["PlaybackAPI"]["_playbackService"]["getFormats"];
      getPlaybackInfo: PlatformTypes["PlaybackAPI"]["_playbackService"]["getPlaybackInfo"];
      getRawVolume: PlatformTypes["PlaybackAPI"]["_playbackService"]["getRawVolume"];
      getVolume: PlatformTypes["PlaybackAPI"]["_playbackService"]["getVolume"];
      lowerVolume: PlatformTypes["PlaybackAPI"]["_playbackService"]["lowerVolume"];
      raiseVolume: PlatformTypes["PlaybackAPI"]["_playbackService"]["raiseVolume"];
      setRawVolume: PlatformTypes["PlaybackAPI"]["_playbackService"]["setRawVolume"];
      setVolume: PlatformTypes["PlaybackAPI"]["_playbackService"]["setVolume"];
      subBufferUnderrun: PlatformTypes["PlaybackAPI"]["_playbackService"]["subBufferUnderrun"];
      subPlaybackInfo: PlatformTypes["PlaybackAPI"]["_playbackService"]["subPlaybackInfo"];
      subPosition: PlatformTypes["PlaybackAPI"]["_playbackService"]["subPosition"];
      subRawVolume: PlatformTypes["PlaybackAPI"]["_playbackService"]["subRawVolume"];
      subVolume: PlatformTypes["PlaybackAPI"]["_playbackService"]["subVolume"];
    };
    _prefsClient: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      create: PlatformTypes["EqualizerAPI"]["prefs"]["create"];
      get: PlatformTypes["EqualizerAPI"]["prefs"]["get"];
      getAll: PlatformTypes["EqualizerAPI"]["prefs"]["getAll"];
      set: PlatformTypes["EqualizerAPI"]["prefs"]["set"];
      sub: PlatformTypes["EqualizerAPI"]["prefs"]["sub"];
      subAll: PlatformTypes["EqualizerAPI"]["prefs"]["subAll"];
    };
    _productStateService: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      delOverridesValues: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"]["delOverridesValues"];
      getValues: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"]["getValues"];
      putOverridesValues: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"]["putOverridesValues"];
      putValues: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"]["putValues"];
      putValuesSync: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"]["putValuesSync"];
      subValues: PlatformTypes["JamDevicesAPI"]["socialConnectAPI"]["socialConnectProductState"]["productStateApi"]["productStateApi"]["subValues"];
    };
    _remoteConfigDebugAPI: PlatformTypes["RemoteConfigDebugAPI"];
    _resolver: PlatformTypes["RemoteConfigurationWithLocalOverrides"];
    _scrobbleService: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      getIncognitoMode: PlatformTypes["PrivateSessionAPI"]["_scrobble"]["getIncognitoMode"];
      putIncognitoMode: PlatformTypes["PrivateSessionAPI"]["_scrobble"]["putIncognitoMode"];
      subIncognitoMode: PlatformTypes["PrivateSessionAPI"]["_scrobble"]["subIncognitoMode"];
    };
    _shouldEnableStreamReportingTracker: boolean;
    _showService: {
      options: {};
      transport: PlatformTypes["AudioOutputDevicesAPI"]["_audioObserver"]["transport"];
    } & {
      getDecorate: PlatformTypes["ShowAPI"]["_events"]["_show_client"]["getDecorate"];
      getShow: PlatformTypes["ShowAPI"]["_events"]["_show_client"]["getShow"];
      getShowEpisode: PlatformTypes["ShowAPI"]["_events"]["_show_client"]["getShowEpisode"];
      getUnfinishedEpisodes: PlatformTypes["ShowAPI"]["_events"]["_show_client"]["getUnfinishedEpisodes"];
      markShowAsPlayed: PlatformTypes["ShowAPI"]["_events"]["_show_client"]["markShowAsPlayed"];
      playShow: PlatformTypes["ShowAPI"]["_events"]["_show_client"]["playShow"];
      subDecorate: PlatformTypes["ShowAPI"]["_events"]["_show_client"]["subDecorate"];
      subShow: PlatformTypes["ShowAPI"]["_events"]["_show_client"]["subShow"];
      subShowEpisode: PlatformTypes["ShowAPI"]["_events"]["_show_client"]["subShowEpisode"];
      subUnfinishedEpisodes: PlatformTypes["ShowAPI"]["_events"]["_show_client"]["subUnfinishedEpisodes"];
    };
    _subtitleLanguages: Array<any>;
    _tokenProvider: PlatformTypes["AuthorizationAPI"]["_tokenProvider"];
    _videoCoordinator: null;
  } & {
    createCoreExtensionVideoCoordinator: () => Promise<any>;
    createOfflineCoordinator: (a: any) => any;
    createPlayerConfiguration: () => Promise<any>;
    createVideoCoordinator: (a: any) => any;
    getAccessToken: () => Promise<any>;
    getCapabilities: () => any;
    getEvents: () => any;
    getPictureInPictureState: () => any;
    getPreferredSubtitleLanguage: () => Promise<any>;
    getProductState: () => Promise<any>;
    getSubtitleLanguages: () => Promise<any>;
    initialize: () => Promise<any>;
    onManifestLoaded: (a: any) => any;
    onPictureInPictureChanged: (a: any) => any;
    reportVideoMode: (a: any) => any;
    setFullscreen: (a: any) => any;
    setIsVideoVisible: (a: any) => any;
    setPip: (a: any) => any;
    setPreferredSubtitleLanguage: (a: any) => any;
    setSubtitleLanguages: (a: any) => any;
    setWindow: (a: any) => any;
    videoModeToSurface: (a: any) => any;
  };
  ZoomAPI: PlatformTypes["SettingsAPI"]["viewportZoom"]["zoomApi"];
  container: string;
  enableCastConnect: boolean;
  initialProductState: {
    "ab-ad-player-targeting": string;
    "ab-watch-now": string;
    ab_recently_played_feature_time_filter_threshold: string;
    "active-session-days": string;
    "ad-formats-preroll-video": string;
    "ad-session-persistence": string;
    ads: string;
    "age-assurance-enabled-account-settings": string;
    "app-developer": string;
    "apply-child-content-restrictions": string;
    arsenal_country: string;
    "audio-preview-url-template": string;
    "audio-quality": string;
    "audiobook-onboarding-completed": string;
    "audiobook-onboarding-dismissed": string;
    autoplay: string;
    "browse-overview-enabled": string;
    "buffering-strategy-parameters": string;
    "capper-profile": string;
    "capping-bar-threshold": string;
    catalogue: string;
    collection: string;
    "com.spotify.madprops.delivered.by.ucs": string;
    "com.spotify.madprops.use.ucs.product.state": string;
    country: string;
    created_by_partner: string;
    "dma-mode-available": string;
    "dma-mode-enabled": string;
    "dsa-mode-available": string;
    "dsa-mode-enabled": string;
    "employee-free-opt-in": string;
    "enable-annotations": string;
    "enable-annotations-read": string;
    "enable-crossfade": string;
    "estimated-age": string;
    "explicit-content": string;
    "fb-grant-permission-local-render": string;
    "fb-info-confirmation": string;
    "filter-explicit-content": string;
    "financial-product": string;
    "has-audiobooks-subscription": string;
    "head-file-caching": string;
    "head-files-url": string;
    "high-bitrate": string;
    "image-url": string;
    incognito_mode_timeout: string;
    "is-cheetara": string;
    "is-pigeon": string;
    "is-puffin": string;
    "is-standalone-audiobooks": string;
    "is-tuna": string;
    is_email_verified: string;
    is_maybe_in_social_session: string;
    jam: string;
    "key-caching-auto-offline": string;
    "key-caching-max-count": string;
    "key-caching-max-offline-seconds": string;
    "key-memory-cache-mode": string;
    libspotify: string;
    "license-acceptance-grace-days": string;
    "license-agreements": string;
    "list-private-by-default": string;
    "metadata-link-lookup-modes": string;
    mobile: string;
    "mobile-browse": string;
    "mobile-login": string;
    "mobile-payment": string;
    name: string;
    "network-operator-premium-activation": string;
    "nft-disabled": string;
    "obfuscate-restricted-tracks": string;
    offline: string;
    "on-demand": string;
    "on-demand-trial": string;
    "on-demand-trial-in-progress": string;
    parrot: string;
    "payments-locked-state": string;
    "pick-and-shuffle": string;
    "player-license": string;
    "player-license-v2": string;
    "playlist-annotations-markup": string;
    "preferred-locale": string;
    "prefetch-keys": string;
    "prefetch-strategy": string;
    "prefetch-window-max": string;
    product: string;
    "public-toplist": string;
    "publish-activity": string;
    "publish-playlist": string;
    radio: string;
    "rating-access": string;
    "remote-control": string;
    "restrict-branch-data-processing": string;
    "restrict-playlist-collaboration": string;
    "send-email": string;
    "setup-headphones-changes": string;
    "should-assure-age-content-playback": string;
    "should-assure-age-social": string;
    "shows-collection": string;
    "shows-collection-jam": string;
    shuffle: string;
    "shuffle-algorithm": string;
    "sidebar-navigation-enabled": string;
    "social-session": string;
    "social-session-free-tier": string;
    "storage-size-config": string;
    streaming: string;
    "streaming-only-premium": string;
    "streaming-rules": string;
    "track-cap": string;
    "ugc-abuse-report": string;
    "ugc-abuse-report-url": string;
    "use-fb-publish-backend": string;
    "user-profile-show-invitation-codes": string;
    "video-cdn-sampling": string;
    "video-device-blacklisted": string;
    "video-initial-bitrate": string;
    "video-keyframe-url": string;
    "video-manifest-url": string;
    "video-wifi-initial-bitrate": string;
    "widevine-license-url": string;
    "yl-kids-restricted-content": string;
  };
  initialUser: {
    avatarBackgroundColor: number;
    displayName: string;
    images: Array<{
      height: number;
      url: string;
      width: number;
    }>;
    type: string;
    uri: string;
    username: string;
  };
  isDeveloperMode: boolean;
  operatingSystem: string;
  username: string;
  version: string;
};
